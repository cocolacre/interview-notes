class A():
  def __init__(self):
    print("Hello from A!")
  pass

class B():
  def __init__(self):
    print("Hello from B!")
class C(A,B):
  def __init__(self):
    super().__init__()
