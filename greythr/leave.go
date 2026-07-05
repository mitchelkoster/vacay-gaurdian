package greythr

type Leave struct {
	Name         string  `json:"name"`
	GrantedCount float64 `json:"grantedCount"`
	BalanceCount float64 `json:"balanceCount"`
}

type LeaveState struct {
	Date   string  `json:"date"`
	Leaves []Leave `json:"leaves"`
}

func (l *LeaveState) Add(leave Leave) {
	l.Leaves = append(l.Leaves, leave)
}
