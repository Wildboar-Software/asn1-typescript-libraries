/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ActivationStateCode, _decode_ActivationStateCode, _encode_ActivationStateCode, _enum_for_ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";
// export { ActivationStateCode, _enum_for_ActivationStateCode, ActivationStateCode_off /* IMPORTED_LONG_ENUMERATION_ITEM */, off /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivationStateCode_on /* IMPORTED_LONG_ENUMERATION_ITEM */, on /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActivationStateCode, _encode_ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";
import { EntireList, _decode_EntireList, _encode_EntireList } from "../AIN-Parameters/EntireList.ta.mjs";
// export { EntireList, _decode_EntireList, _encode_EntireList } from "../AIN-Parameters/EntireList.ta.mjs";
import { MemorySlot, _decode_MemorySlot, _encode_MemorySlot } from "../AIN-Parameters/MemorySlot.ta.mjs";
// export { MemorySlot, _decode_MemorySlot, _encode_MemorySlot } from "../AIN-Parameters/MemorySlot.ta.mjs";
import { ListSize, _decode_ListSize, _encode_ListSize } from "../AIN-Parameters/ListSize.ta.mjs";
// export { ListSize, _decode_ListSize, _encode_ListSize } from "../AIN-Parameters/ListSize.ta.mjs";
import { ForwardToDn, _decode_ForwardToDn, _encode_ForwardToDn } from "../AIN-Parameters/ForwardToDn.ta.mjs";
// export { ForwardToDn, _decode_ForwardToDn, _encode_ForwardToDn } from "../AIN-Parameters/ForwardToDn.ta.mjs";
import { DelayInterval, _decode_DelayInterval, _encode_DelayInterval } from "../AIN-Parameters/DelayInterval.ta.mjs";
// export { DelayInterval, _decode_DelayInterval, _encode_DelayInterval } from "../AIN-Parameters/DelayInterval.ta.mjs";
import { Empty, _decode_Empty, _encode_Empty } from "../AIN-Parameters/Empty.ta.mjs";
// export { Empty, Empty_entireList /* IMPORTED_LONG_NAMED_BIT */, entireList /* IMPORTED_SHORT_NAMED_BIT */, Empty_outgoingmemorySlot /* IMPORTED_LONG_NAMED_BIT */, outgoingmemorySlot /* IMPORTED_SHORT_NAMED_BIT */, Empty_incomingmemorySlot /* IMPORTED_LONG_NAMED_BIT */, incomingmemorySlot /* IMPORTED_SHORT_NAMED_BIT */, Empty_forwardToDn /* IMPORTED_LONG_NAMED_BIT */, forwardToDn /* IMPORTED_SHORT_NAMED_BIT */, _decode_Empty, _encode_Empty } from "../AIN-Parameters/Empty.ta.mjs";


/**
 * @summary InfoProvided
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InfoProvided ::= [100] IMPLICIT SEQUENCE{
 *         activationStateCode [1] IMPLICIT ActivationStateCode OPTIONAL,
 *         entireList          [2] IMPLICIT EntireList OPTIONAL,
 *         memorySlot          [3] IMPLICIT MemorySlot OPTIONAL,
 *         listSize            [4] IMPLICIT ListSize OPTIONAL,
 *         forwardToDn         [5] IMPLICIT ForwardToDn OPTIONAL,
 *         delayInterval       [6] IMPLICIT DelayInterval OPTIONAL,
 *         empty               [7] IMPLICIT Empty OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class InfoProvided {
    constructor (
        /**
         * @summary `activationStateCode`.
         * @public
         * @readonly
         */
        readonly activationStateCode: OPTIONAL<ActivationStateCode>,
        /**
         * @summary `entireList`.
         * @public
         * @readonly
         */
        readonly entireList: OPTIONAL<EntireList>,
        /**
         * @summary `memorySlot`.
         * @public
         * @readonly
         */
        readonly memorySlot: OPTIONAL<MemorySlot>,
        /**
         * @summary `listSize`.
         * @public
         * @readonly
         */
        readonly listSize: OPTIONAL<ListSize>,
        /**
         * @summary `forwardToDn`.
         * @public
         * @readonly
         */
        readonly forwardToDn: OPTIONAL<ForwardToDn>,
        /**
         * @summary `delayInterval`.
         * @public
         * @readonly
         */
        readonly delayInterval: OPTIONAL<DelayInterval>,
        /**
         * @summary `empty`.
         * @public
         * @readonly
         */
        readonly empty: OPTIONAL<Empty>
    ) {}

    /**
     * @summary Restructures an object into a InfoProvided
     * @description
     * 
     * This takes an `object` and converts it to a `InfoProvided`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InfoProvided`.
     * @returns {InfoProvided}
     */
    public static _from_object (_o: { [_K in keyof (InfoProvided)]: (InfoProvided)[_K] }): InfoProvided {
        return new InfoProvided(_o.activationStateCode, _o.entireList, _o.memorySlot, _o.listSize, _o.forwardToDn, _o.delayInterval, _o.empty);
    }

        /**
         * @summary The enum used as the type of the component `activationStateCode`
         * @public
         * @static
         */

    public static _enum_for_activationStateCode = _enum_for_ActivationStateCode;
}

/**
 * @summary The Leading Root Component Types of InfoProvided
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InfoProvided: $.ComponentSpec[] = [
    new $.ComponentSpec("activationStateCode", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("entireList", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("memorySlot", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("listSize", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("forwardToDn", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("delayInterval", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("empty", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of InfoProvided
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InfoProvided: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InfoProvided
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InfoProvided: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InfoProvided: $.ASN1Decoder<InfoProvided> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InfoProvided
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InfoProvided (el: _Element): InfoProvided {
    if (!_cached_decoder_for_InfoProvided) { _cached_decoder_for_InfoProvided = $._decode_implicit<InfoProvided>(() => function (el: _Element): InfoProvided {
    let activationStateCode: OPTIONAL<ActivationStateCode>;
    let entireList: OPTIONAL<EntireList>;
    let memorySlot: OPTIONAL<MemorySlot>;
    let listSize: OPTIONAL<ListSize>;
    let forwardToDn: OPTIONAL<ForwardToDn>;
    let delayInterval: OPTIONAL<DelayInterval>;
    let empty: OPTIONAL<Empty>;
    const callbacks: $.DecodingMap = {
        "activationStateCode": (_el: _Element): void => { activationStateCode = $._decode_implicit<ActivationStateCode>(() => _decode_ActivationStateCode)(_el); },
        "entireList": (_el: _Element): void => { entireList = $._decode_implicit<EntireList>(() => _decode_EntireList)(_el); },
        "memorySlot": (_el: _Element): void => { memorySlot = $._decode_implicit<MemorySlot>(() => _decode_MemorySlot)(_el); },
        "listSize": (_el: _Element): void => { listSize = $._decode_implicit<ListSize>(() => _decode_ListSize)(_el); },
        "forwardToDn": (_el: _Element): void => { forwardToDn = $._decode_implicit<ForwardToDn>(() => _decode_ForwardToDn)(_el); },
        "delayInterval": (_el: _Element): void => { delayInterval = $._decode_implicit<DelayInterval>(() => _decode_DelayInterval)(_el); },
        "empty": (_el: _Element): void => { empty = $._decode_implicit<Empty>(() => _decode_Empty)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InfoProvided,
        _extension_additions_list_spec_for_InfoProvided,
        _root_component_type_list_2_spec_for_InfoProvided,
        undefined,
    );
    return new InfoProvided(
        activationStateCode,
        entireList,
        memorySlot,
        listSize,
        forwardToDn,
        delayInterval,
        empty
    );
}); }
    return _cached_decoder_for_InfoProvided(el);
}

let _cached_encoder_for_InfoProvided: $.ASN1Encoder<InfoProvided> | null = null;

/**
 * @summary Encodes a(n) InfoProvided into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InfoProvided, encoded as an ASN.1 Element.
 */
export
function _encode_InfoProvided (value: InfoProvided, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InfoProvided) { _cached_encoder_for_InfoProvided = $._encode_implicit(_TagClass.context, 100, () => function (value: InfoProvided, elGetter: $.ASN1Encoder<InfoProvided>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.activationStateCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ActivationStateCode, $.BER)(value.activationStateCode, $.BER)),
            /* IF_ABSENT  */ ((value.entireList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EntireList, $.BER)(value.entireList, $.BER)),
            /* IF_ABSENT  */ ((value.memorySlot === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MemorySlot, $.BER)(value.memorySlot, $.BER)),
            /* IF_ABSENT  */ ((value.listSize === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ListSize, $.BER)(value.listSize, $.BER)),
            /* IF_ABSENT  */ ((value.forwardToDn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ForwardToDn, $.BER)(value.forwardToDn, $.BER)),
            /* IF_ABSENT  */ ((value.delayInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_DelayInterval, $.BER)(value.delayInterval, $.BER)),
            /* IF_ABSENT  */ ((value.empty === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Empty, $.BER)(value.empty, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_InfoProvided(value, elGetter);
}


/* eslint-enable */
