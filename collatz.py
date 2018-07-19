def collatz(number):
    if number % 2 == 0:
        print(number // 2)
        return number // 2
    else:
        result = 3 * number + 1
        print(result)
        return result

while True:
    user_input = input("Give me a number: ")
    try:
        while user_input != 1:
            user_input = collatz(int(user_input))
    except ValueError:
        print("You must enter positive integer")