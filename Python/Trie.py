class TrieNode:
    def __init__(self):
        self.max_size = 26
        self.isEnd = False
        self.links = [None] * self.max_size #{key: None for key in 'abcdefghijklmnopqrstuvwxyz'}

    def getID(self, char):
        return ord(char)-ord('a')

    def containsKey(self, char):
        return self.links[self.getID(char)] is not None

    def get(self, char):
        return self.links[self.getID(char)]

    def put(self, char, node):
        self.links[self.getID(char)] = node

    def setEnd(self):
        self.isEnd = True

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for c in word:
            if not node.containsKey(c):
                node.put(c, TrieNode())
            node = node.get(c)
        node.setEnd()

    def searchPrefix(self, word: str) -> TrieNode:
        node = self.root
        for c in word:
            if node.containsKey(c):
                node = node.get(c)
            else:
                return None
        return node

    def search(self, word: str) -> bool:
        node = self.searchPrefix(word)
        return node is not None and node.isEnd

    def startsWith(self, prefix: str) -> bool:
        node = self.searchPrefix(prefix)
        return node is not None
