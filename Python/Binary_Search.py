# Itterative
def binarySearch(array, target):
	if not array: return -1
	carry = 0
	while array:
		mid = len(array) // 2
		if array[mid] == target:
			return mid+carry
		elif target < array[mid]:
			array = array[:mid]
		elif array[mid] < target:
			array = array[mid+1:]
			carry += mid+1
	return -1

# Recursive
def binarySearch_recursive(array, target, carry=0):
	if not array: return -1
	mid = len(array) // 2
	if array[mid] == target:
		return mid+carry
	elif array[mid] > target:
		return binarySearch(array[:mid], target, carry)
	elif array[mid] < target:
		carry += mid+1
		return binarySearch(array[mid+1:], target, carry)
