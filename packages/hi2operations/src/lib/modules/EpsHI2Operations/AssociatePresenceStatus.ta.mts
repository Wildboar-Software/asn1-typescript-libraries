/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_PresenceType, _encode_PresenceType, _enum_for_PresenceType, PresenceType } from "../EpsHI2Operations/PresenceType.ta.mjs";
// export { PresenceType, _enum_for_PresenceType, PresenceType_pTCClient /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCClient /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceType_pTCGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PresenceType, _encode_PresenceType } from "../EpsHI2Operations/PresenceType.ta.mjs";


/**
 * @summary AssociatePresenceStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssociatePresenceStatus ::= SEQUENCE
 * {
 *  presenceID [1] UTF8String,
 *  -- identity of PTC Client(s)or the PTC group
 *  presenceType [2] PresenceType,
 *  presenceStatus [3] BOOLEAN,
 *  -- default false, true indicates connected.
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class AssociatePresenceStatus {
    constructor (
        /**
         * @summary `presenceID`.
         * @public
         * @readonly
         */
        readonly presenceID: UTF8String,
        /**
         * @summary `presenceType`.
         * @public
         * @readonly
         */
        readonly presenceType: PresenceType,
        /**
         * @summary `presenceStatus`.
         * @public
         * @readonly
         */
        readonly presenceStatus: BOOLEAN,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AssociatePresenceStatus
     * @description
     * 
     * This takes an `object` and converts it to a `AssociatePresenceStatus`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AssociatePresenceStatus`.
     * @returns {AssociatePresenceStatus}
     */
    public static _from_object (_o: { [_K in keyof (AssociatePresenceStatus)]: (AssociatePresenceStatus)[_K] }): AssociatePresenceStatus {
        return new AssociatePresenceStatus(_o.presenceID, _o.presenceType, _o.presenceStatus, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `presenceType`
         * @public
         * @static
         */

    public static _enum_for_presenceType = _enum_for_PresenceType;
}

/**
 * @summary The Leading Root Component Types of AssociatePresenceStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AssociatePresenceStatus: $.ComponentSpec[] = [
    new $.ComponentSpec("presenceID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("presenceType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("presenceStatus", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AssociatePresenceStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AssociatePresenceStatus: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AssociatePresenceStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AssociatePresenceStatus: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AssociatePresenceStatus: $.ASN1Decoder<AssociatePresenceStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssociatePresenceStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssociatePresenceStatus (el: _Element): AssociatePresenceStatus {
    if (!_cached_decoder_for_AssociatePresenceStatus) { _cached_decoder_for_AssociatePresenceStatus = function (el: _Element): AssociatePresenceStatus {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("AssociatePresenceStatus contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "presenceID";
    sequence[1].name = "presenceType";
    sequence[2].name = "presenceStatus";
    let presenceID!: UTF8String;
    let presenceType!: PresenceType;
    let presenceStatus!: BOOLEAN;
    presenceID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    presenceType = $._decode_implicit<PresenceType>(() => _decode_PresenceType)(sequence[1]);
    presenceStatus = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[2]);
    return new AssociatePresenceStatus(
        presenceID,
        presenceType,
        presenceStatus,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_AssociatePresenceStatus(el);
}

let _cached_encoder_for_AssociatePresenceStatus: $.ASN1Encoder<AssociatePresenceStatus> | null = null;

/**
 * @summary Encodes a(n) AssociatePresenceStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociatePresenceStatus, encoded as an ASN.1 Element.
 */
export
function _encode_AssociatePresenceStatus (value: AssociatePresenceStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssociatePresenceStatus) { _cached_encoder_for_AssociatePresenceStatus = function (value: AssociatePresenceStatus, elGetter: $.ASN1Encoder<AssociatePresenceStatus>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.presenceID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PresenceType, $.BER)(value.presenceType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.presenceStatus, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AssociatePresenceStatus(value, elGetter);
}


/* eslint-enable */
