import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface ENSResolverInterface extends Interface {
    getFunction(nameOrSignature: "ABI" | "addr(bytes32)" | "addr(bytes32,uint256)" | "approve" | "clearRecords" | "contenthash" | "dnsRecord" | "hasDNSRecords" | "interfaceImplementer" | "isApprovedFor" | "isApprovedForAll" | "multicall" | "multicallWithNodeCheck" | "name" | "pubkey" | "recordVersions" | "setABI" | "setAddr(bytes32,uint256,bytes)" | "setAddr(bytes32,address)" | "setApprovalForAll" | "setContenthash" | "setDNSRecords" | "setInterface" | "setName" | "setPubkey" | "setText" | "setZonehash" | "supportsInterface" | "text" | "zonehash"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ABIChanged" | "AddrChanged" | "AddressChanged" | "ApprovalForAll" | "Approved" | "ContenthashChanged" | "DNSRecordChanged" | "DNSRecordDeleted" | "DNSZonehashChanged" | "InterfaceChanged" | "NameChanged" | "PubkeyChanged" | "TextChanged" | "VersionChanged"): EventFragment;
    encodeFunctionData(functionFragment: "ABI", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addr(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "addr(bytes32,uint256)", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "approve", values: [BytesLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "clearRecords", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "contenthash", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "dnsRecord", values: [BytesLike, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "hasDNSRecords", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "interfaceImplementer", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "isApprovedFor", values: [AddressLike, BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "multicallWithNodeCheck", values: [BytesLike, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "name", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "pubkey", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "recordVersions", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setABI", values: [BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setAddr(bytes32,uint256,bytes)", values: [BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setAddr(bytes32,address)", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "setContenthash", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "setDNSRecords", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "setInterface", values: [BytesLike, BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "setName", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setPubkey", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "setText", values: [BytesLike, string, string]): string;
    encodeFunctionData(functionFragment: "setZonehash", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "text", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "zonehash", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "ABI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addr(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addr(bytes32,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearRecords", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contenthash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dnsRecord", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasDNSRecords", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interfaceImplementer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicallWithNodeCheck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pubkey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recordVersions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setABI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddr(bytes32,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddr(bytes32,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContenthash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDNSRecords", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPubkey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setText", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setZonehash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "text", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zonehash", data: BytesLike): Result;
}
export declare namespace ABIChangedEvent {
    type InputTuple = [node: BytesLike, contentType: BigNumberish];
    type OutputTuple = [node: string, contentType: bigint];
    interface OutputObject {
        node: string;
        contentType: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AddrChangedEvent {
    type InputTuple = [node: BytesLike, a: AddressLike];
    type OutputTuple = [node: string, a: string];
    interface OutputObject {
        node: string;
        a: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AddressChangedEvent {
    type InputTuple = [
        node: BytesLike,
        coinType: BigNumberish,
        newAddress: BytesLike
    ];
    type OutputTuple = [
        node: string,
        coinType: bigint,
        newAddress: string
    ];
    interface OutputObject {
        node: string;
        coinType: bigint;
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ApprovalForAllEvent {
    type InputTuple = [
        owner: AddressLike,
        operator: AddressLike,
        approved: boolean
    ];
    type OutputTuple = [
        owner: string,
        operator: string,
        approved: boolean
    ];
    interface OutputObject {
        owner: string;
        operator: string;
        approved: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ApprovedEvent {
    type InputTuple = [
        owner: AddressLike,
        node: BytesLike,
        delegate: AddressLike,
        approved: boolean
    ];
    type OutputTuple = [
        owner: string,
        node: string,
        delegate: string,
        approved: boolean
    ];
    interface OutputObject {
        owner: string;
        node: string;
        delegate: string;
        approved: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ContenthashChangedEvent {
    type InputTuple = [node: BytesLike, hash: BytesLike];
    type OutputTuple = [node: string, hash: string];
    interface OutputObject {
        node: string;
        hash: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DNSRecordChangedEvent {
    type InputTuple = [
        node: BytesLike,
        name: BytesLike,
        resource: BigNumberish,
        record: BytesLike
    ];
    type OutputTuple = [
        node: string,
        name: string,
        resource: bigint,
        record: string
    ];
    interface OutputObject {
        node: string;
        name: string;
        resource: bigint;
        record: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DNSRecordDeletedEvent {
    type InputTuple = [
        node: BytesLike,
        name: BytesLike,
        resource: BigNumberish
    ];
    type OutputTuple = [node: string, name: string, resource: bigint];
    interface OutputObject {
        node: string;
        name: string;
        resource: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DNSZonehashChangedEvent {
    type InputTuple = [
        node: BytesLike,
        lastzonehash: BytesLike,
        zonehash: BytesLike
    ];
    type OutputTuple = [
        node: string,
        lastzonehash: string,
        zonehash: string
    ];
    interface OutputObject {
        node: string;
        lastzonehash: string;
        zonehash: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace InterfaceChangedEvent {
    type InputTuple = [
        node: BytesLike,
        interfaceID: BytesLike,
        implementer: AddressLike
    ];
    type OutputTuple = [
        node: string,
        interfaceID: string,
        implementer: string
    ];
    interface OutputObject {
        node: string;
        interfaceID: string;
        implementer: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NameChangedEvent {
    type InputTuple = [node: BytesLike, name: string];
    type OutputTuple = [node: string, name: string];
    interface OutputObject {
        node: string;
        name: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PubkeyChangedEvent {
    type InputTuple = [node: BytesLike, x: BytesLike, y: BytesLike];
    type OutputTuple = [node: string, x: string, y: string];
    interface OutputObject {
        node: string;
        x: string;
        y: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TextChangedEvent {
    type InputTuple = [
        node: BytesLike,
        indexedKey: string,
        key: string,
        value: string
    ];
    type OutputTuple = [
        node: string,
        indexedKey: string,
        key: string,
        value: string
    ];
    interface OutputObject {
        node: string;
        indexedKey: string;
        key: string;
        value: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace VersionChangedEvent {
    type InputTuple = [node: BytesLike, newVersion: BigNumberish];
    type OutputTuple = [node: string, newVersion: bigint];
    interface OutputObject {
        node: string;
        newVersion: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface ENSResolver extends BaseContract {
    connect(runner?: ContractRunner | null): ENSResolver;
    waitForDeployment(): Promise<this>;
    interface: ENSResolverInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    ABI: TypedContractMethod<[
        node: BytesLike,
        contentTypes: BigNumberish
    ], [
        [bigint, string]
    ], "view">;
    "addr(bytes32)": TypedContractMethod<[node: BytesLike], [string], "view">;
    "addr(bytes32,uint256)": TypedContractMethod<[
        node: BytesLike,
        coinType: BigNumberish
    ], [
        string
    ], "view">;
    approve: TypedContractMethod<[
        node: BytesLike,
        delegate: AddressLike,
        approved: boolean
    ], [
        void
    ], "nonpayable">;
    clearRecords: TypedContractMethod<[node: BytesLike], [void], "nonpayable">;
    contenthash: TypedContractMethod<[node: BytesLike], [string], "view">;
    dnsRecord: TypedContractMethod<[
        node: BytesLike,
        name: BytesLike,
        resource: BigNumberish
    ], [
        string
    ], "view">;
    hasDNSRecords: TypedContractMethod<[
        node: BytesLike,
        name: BytesLike
    ], [
        boolean
    ], "view">;
    interfaceImplementer: TypedContractMethod<[
        node: BytesLike,
        interfaceID: BytesLike
    ], [
        string
    ], "view">;
    isApprovedFor: TypedContractMethod<[
        owner: AddressLike,
        node: BytesLike,
        delegate: AddressLike
    ], [
        boolean
    ], "view">;
    isApprovedForAll: TypedContractMethod<[
        account: AddressLike,
        operator: AddressLike
    ], [
        boolean
    ], "view">;
    multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;
    multicallWithNodeCheck: TypedContractMethod<[
        nodehash: BytesLike,
        data: BytesLike[]
    ], [
        string[]
    ], "nonpayable">;
    name: TypedContractMethod<[node: BytesLike], [string], "view">;
    pubkey: TypedContractMethod<[
        node: BytesLike
    ], [
        [string, string] & {
            x: string;
            y: string;
        }
    ], "view">;
    recordVersions: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
    setABI: TypedContractMethod<[
        node: BytesLike,
        contentType: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    "setAddr(bytes32,uint256,bytes)": TypedContractMethod<[
        node: BytesLike,
        coinType: BigNumberish,
        a: BytesLike
    ], [
        void
    ], "nonpayable">;
    "setAddr(bytes32,address)": TypedContractMethod<[
        node: BytesLike,
        a: AddressLike
    ], [
        void
    ], "nonpayable">;
    setApprovalForAll: TypedContractMethod<[
        operator: AddressLike,
        approved: boolean
    ], [
        void
    ], "nonpayable">;
    setContenthash: TypedContractMethod<[
        node: BytesLike,
        hash: BytesLike
    ], [
        void
    ], "nonpayable">;
    setDNSRecords: TypedContractMethod<[
        node: BytesLike,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    setInterface: TypedContractMethod<[
        node: BytesLike,
        interfaceID: BytesLike,
        implementer: AddressLike
    ], [
        void
    ], "nonpayable">;
    setName: TypedContractMethod<[
        node: BytesLike,
        newName: string
    ], [
        void
    ], "nonpayable">;
    setPubkey: TypedContractMethod<[
        node: BytesLike,
        x: BytesLike,
        y: BytesLike
    ], [
        void
    ], "nonpayable">;
    setText: TypedContractMethod<[
        node: BytesLike,
        key: string,
        value: string
    ], [
        void
    ], "nonpayable">;
    setZonehash: TypedContractMethod<[
        node: BytesLike,
        hash: BytesLike
    ], [
        void
    ], "nonpayable">;
    supportsInterface: TypedContractMethod<[
        interfaceID: BytesLike
    ], [
        boolean
    ], "view">;
    text: TypedContractMethod<[node: BytesLike, key: string], [string], "view">;
    zonehash: TypedContractMethod<[node: BytesLike], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "ABI"): TypedContractMethod<[
        node: BytesLike,
        contentTypes: BigNumberish
    ], [
        [bigint, string]
    ], "view">;
    getFunction(nameOrSignature: "addr(bytes32)"): TypedContractMethod<[node: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "addr(bytes32,uint256)"): TypedContractMethod<[
        node: BytesLike,
        coinType: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "approve"): TypedContractMethod<[
        node: BytesLike,
        delegate: AddressLike,
        approved: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "clearRecords"): TypedContractMethod<[node: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "contenthash"): TypedContractMethod<[node: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "dnsRecord"): TypedContractMethod<[
        node: BytesLike,
        name: BytesLike,
        resource: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "hasDNSRecords"): TypedContractMethod<[node: BytesLike, name: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "interfaceImplementer"): TypedContractMethod<[
        node: BytesLike,
        interfaceID: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "isApprovedFor"): TypedContractMethod<[
        owner: AddressLike,
        node: BytesLike,
        delegate: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "isApprovedForAll"): TypedContractMethod<[
        account: AddressLike,
        operator: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "multicall"): TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;
    getFunction(nameOrSignature: "multicallWithNodeCheck"): TypedContractMethod<[
        nodehash: BytesLike,
        data: BytesLike[]
    ], [
        string[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "name"): TypedContractMethod<[node: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "pubkey"): TypedContractMethod<[
        node: BytesLike
    ], [
        [string, string] & {
            x: string;
            y: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "recordVersions"): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "setABI"): TypedContractMethod<[
        node: BytesLike,
        contentType: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setAddr(bytes32,uint256,bytes)"): TypedContractMethod<[
        node: BytesLike,
        coinType: BigNumberish,
        a: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setAddr(bytes32,address)"): TypedContractMethod<[
        node: BytesLike,
        a: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setApprovalForAll"): TypedContractMethod<[
        operator: AddressLike,
        approved: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setContenthash"): TypedContractMethod<[
        node: BytesLike,
        hash: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setDNSRecords"): TypedContractMethod<[
        node: BytesLike,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setInterface"): TypedContractMethod<[
        node: BytesLike,
        interfaceID: BytesLike,
        implementer: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setName"): TypedContractMethod<[
        node: BytesLike,
        newName: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setPubkey"): TypedContractMethod<[
        node: BytesLike,
        x: BytesLike,
        y: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setText"): TypedContractMethod<[
        node: BytesLike,
        key: string,
        value: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setZonehash"): TypedContractMethod<[
        node: BytesLike,
        hash: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceID: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "text"): TypedContractMethod<[node: BytesLike, key: string], [string], "view">;
    getFunction(nameOrSignature: "zonehash"): TypedContractMethod<[node: BytesLike], [string], "view">;
    getEvent(key: "ABIChanged"): TypedContractEvent<ABIChangedEvent.InputTuple, ABIChangedEvent.OutputTuple, ABIChangedEvent.OutputObject>;
    getEvent(key: "AddrChanged"): TypedContractEvent<AddrChangedEvent.InputTuple, AddrChangedEvent.OutputTuple, AddrChangedEvent.OutputObject>;
    getEvent(key: "AddressChanged"): TypedContractEvent<AddressChangedEvent.InputTuple, AddressChangedEvent.OutputTuple, AddressChangedEvent.OutputObject>;
    getEvent(key: "ApprovalForAll"): TypedContractEvent<ApprovalForAllEvent.InputTuple, ApprovalForAllEvent.OutputTuple, ApprovalForAllEvent.OutputObject>;
    getEvent(key: "Approved"): TypedContractEvent<ApprovedEvent.InputTuple, ApprovedEvent.OutputTuple, ApprovedEvent.OutputObject>;
    getEvent(key: "ContenthashChanged"): TypedContractEvent<ContenthashChangedEvent.InputTuple, ContenthashChangedEvent.OutputTuple, ContenthashChangedEvent.OutputObject>;
    getEvent(key: "DNSRecordChanged"): TypedContractEvent<DNSRecordChangedEvent.InputTuple, DNSRecordChangedEvent.OutputTuple, DNSRecordChangedEvent.OutputObject>;
    getEvent(key: "DNSRecordDeleted"): TypedContractEvent<DNSRecordDeletedEvent.InputTuple, DNSRecordDeletedEvent.OutputTuple, DNSRecordDeletedEvent.OutputObject>;
    getEvent(key: "DNSZonehashChanged"): TypedContractEvent<DNSZonehashChangedEvent.InputTuple, DNSZonehashChangedEvent.OutputTuple, DNSZonehashChangedEvent.OutputObject>;
    getEvent(key: "InterfaceChanged"): TypedContractEvent<InterfaceChangedEvent.InputTuple, InterfaceChangedEvent.OutputTuple, InterfaceChangedEvent.OutputObject>;
    getEvent(key: "NameChanged"): TypedContractEvent<NameChangedEvent.InputTuple, NameChangedEvent.OutputTuple, NameChangedEvent.OutputObject>;
    getEvent(key: "PubkeyChanged"): TypedContractEvent<PubkeyChangedEvent.InputTuple, PubkeyChangedEvent.OutputTuple, PubkeyChangedEvent.OutputObject>;
    getEvent(key: "TextChanged"): TypedContractEvent<TextChangedEvent.InputTuple, TextChangedEvent.OutputTuple, TextChangedEvent.OutputObject>;
    getEvent(key: "VersionChanged"): TypedContractEvent<VersionChangedEvent.InputTuple, VersionChangedEvent.OutputTuple, VersionChangedEvent.OutputObject>;
    filters: {
        "ABIChanged(bytes32,uint256)": TypedContractEvent<ABIChangedEvent.InputTuple, ABIChangedEvent.OutputTuple, ABIChangedEvent.OutputObject>;
        ABIChanged: TypedContractEvent<ABIChangedEvent.InputTuple, ABIChangedEvent.OutputTuple, ABIChangedEvent.OutputObject>;
        "AddrChanged(bytes32,address)": TypedContractEvent<AddrChangedEvent.InputTuple, AddrChangedEvent.OutputTuple, AddrChangedEvent.OutputObject>;
        AddrChanged: TypedContractEvent<AddrChangedEvent.InputTuple, AddrChangedEvent.OutputTuple, AddrChangedEvent.OutputObject>;
        "AddressChanged(bytes32,uint256,bytes)": TypedContractEvent<AddressChangedEvent.InputTuple, AddressChangedEvent.OutputTuple, AddressChangedEvent.OutputObject>;
        AddressChanged: TypedContractEvent<AddressChangedEvent.InputTuple, AddressChangedEvent.OutputTuple, AddressChangedEvent.OutputObject>;
        "ApprovalForAll(address,address,bool)": TypedContractEvent<ApprovalForAllEvent.InputTuple, ApprovalForAllEvent.OutputTuple, ApprovalForAllEvent.OutputObject>;
        ApprovalForAll: TypedContractEvent<ApprovalForAllEvent.InputTuple, ApprovalForAllEvent.OutputTuple, ApprovalForAllEvent.OutputObject>;
        "Approved(address,bytes32,address,bool)": TypedContractEvent<ApprovedEvent.InputTuple, ApprovedEvent.OutputTuple, ApprovedEvent.OutputObject>;
        Approved: TypedContractEvent<ApprovedEvent.InputTuple, ApprovedEvent.OutputTuple, ApprovedEvent.OutputObject>;
        "ContenthashChanged(bytes32,bytes)": TypedContractEvent<ContenthashChangedEvent.InputTuple, ContenthashChangedEvent.OutputTuple, ContenthashChangedEvent.OutputObject>;
        ContenthashChanged: TypedContractEvent<ContenthashChangedEvent.InputTuple, ContenthashChangedEvent.OutputTuple, ContenthashChangedEvent.OutputObject>;
        "DNSRecordChanged(bytes32,bytes,uint16,bytes)": TypedContractEvent<DNSRecordChangedEvent.InputTuple, DNSRecordChangedEvent.OutputTuple, DNSRecordChangedEvent.OutputObject>;
        DNSRecordChanged: TypedContractEvent<DNSRecordChangedEvent.InputTuple, DNSRecordChangedEvent.OutputTuple, DNSRecordChangedEvent.OutputObject>;
        "DNSRecordDeleted(bytes32,bytes,uint16)": TypedContractEvent<DNSRecordDeletedEvent.InputTuple, DNSRecordDeletedEvent.OutputTuple, DNSRecordDeletedEvent.OutputObject>;
        DNSRecordDeleted: TypedContractEvent<DNSRecordDeletedEvent.InputTuple, DNSRecordDeletedEvent.OutputTuple, DNSRecordDeletedEvent.OutputObject>;
        "DNSZonehashChanged(bytes32,bytes,bytes)": TypedContractEvent<DNSZonehashChangedEvent.InputTuple, DNSZonehashChangedEvent.OutputTuple, DNSZonehashChangedEvent.OutputObject>;
        DNSZonehashChanged: TypedContractEvent<DNSZonehashChangedEvent.InputTuple, DNSZonehashChangedEvent.OutputTuple, DNSZonehashChangedEvent.OutputObject>;
        "InterfaceChanged(bytes32,bytes4,address)": TypedContractEvent<InterfaceChangedEvent.InputTuple, InterfaceChangedEvent.OutputTuple, InterfaceChangedEvent.OutputObject>;
        InterfaceChanged: TypedContractEvent<InterfaceChangedEvent.InputTuple, InterfaceChangedEvent.OutputTuple, InterfaceChangedEvent.OutputObject>;
        "NameChanged(bytes32,string)": TypedContractEvent<NameChangedEvent.InputTuple, NameChangedEvent.OutputTuple, NameChangedEvent.OutputObject>;
        NameChanged: TypedContractEvent<NameChangedEvent.InputTuple, NameChangedEvent.OutputTuple, NameChangedEvent.OutputObject>;
        "PubkeyChanged(bytes32,bytes32,bytes32)": TypedContractEvent<PubkeyChangedEvent.InputTuple, PubkeyChangedEvent.OutputTuple, PubkeyChangedEvent.OutputObject>;
        PubkeyChanged: TypedContractEvent<PubkeyChangedEvent.InputTuple, PubkeyChangedEvent.OutputTuple, PubkeyChangedEvent.OutputObject>;
        "TextChanged(bytes32,string,string,string)": TypedContractEvent<TextChangedEvent.InputTuple, TextChangedEvent.OutputTuple, TextChangedEvent.OutputObject>;
        TextChanged: TypedContractEvent<TextChangedEvent.InputTuple, TextChangedEvent.OutputTuple, TextChangedEvent.OutputObject>;
        "VersionChanged(bytes32,uint64)": TypedContractEvent<VersionChangedEvent.InputTuple, VersionChangedEvent.OutputTuple, VersionChangedEvent.OutputObject>;
        VersionChanged: TypedContractEvent<VersionChangedEvent.InputTuple, VersionChangedEvent.OutputTuple, VersionChangedEvent.OutputObject>;
    };
}
