function TabButton(props: { label: string }) {
    const { label } = props;
    return <button className="rounded-lg w-max-28 h-max-12 w-28 h-12 text-body-1 text-brown-500 hover:bg-brown-300 ">
        {label}
    </button>;
}

export default TabButton;