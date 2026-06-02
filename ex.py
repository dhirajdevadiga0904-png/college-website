def tower(n,sh,anu,dee):
    if n==1:
        print(f"move disk 1 from{sh}to{dee}")
        return
    tower(n-1,sh,dee,anu)
    print(f"move disk" ,n,"from{sh}to{dee}")
    tower(n-1,anu,sh,dee)
n=3
tower(n,'A','B','C')    