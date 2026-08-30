/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LCSClientType, _enum_for_LCSClientType, LCSClientType_emergencyServices /* IMPORTED_LONG_ENUMERATION_ITEM */, emergencyServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientType_valueAddedServices /* IMPORTED_LONG_ENUMERATION_ITEM */, valueAddedServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientType_plmnOperatorServices /* IMPORTED_LONG_ENUMERATION_ITEM */, plmnOperatorServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientType_lawfulInterceptServices /* IMPORTED_LONG_ENUMERATION_ITEM */, lawfulInterceptServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LCSClientType, _encode_LCSClientType } from "../MAP-LCS-DataTypes/LCSClientType.ta.mjs";
// export { LCSClientType, _enum_for_LCSClientType, LCSClientType_emergencyServices /* IMPORTED_LONG_ENUMERATION_ITEM */, emergencyServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientType_valueAddedServices /* IMPORTED_LONG_ENUMERATION_ITEM */, valueAddedServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientType_plmnOperatorServices /* IMPORTED_LONG_ENUMERATION_ITEM */, plmnOperatorServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientType_lawfulInterceptServices /* IMPORTED_LONG_ENUMERATION_ITEM */, lawfulInterceptServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LCSClientType, _encode_LCSClientType } from "../MAP-LCS-DataTypes/LCSClientType.ta.mjs";
import { LCSClientExternalID, _decode_LCSClientExternalID, _encode_LCSClientExternalID } from "../MAP-CommonDataTypes/LCSClientExternalID.ta.mjs";
// export { LCSClientExternalID, _decode_LCSClientExternalID, _encode_LCSClientExternalID } from "../MAP-CommonDataTypes/LCSClientExternalID.ta.mjs";
import { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";
// export { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";
import { LCSClientInternalID, _enum_for_LCSClientInternalID, LCSClientInternalID_broadcastService /* IMPORTED_LONG_ENUMERATION_ITEM */, broadcastService /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientInternalID_o_andM_HPLMN /* IMPORTED_LONG_ENUMERATION_ITEM */, o_andM_HPLMN /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientInternalID_o_andM_VPLMN /* IMPORTED_LONG_ENUMERATION_ITEM */, o_andM_VPLMN /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientInternalID_anonymousLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, anonymousLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientInternalID_targetMSsubscribedService /* IMPORTED_LONG_ENUMERATION_ITEM */, targetMSsubscribedService /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LCSClientInternalID, _encode_LCSClientInternalID } from "../MAP-CommonDataTypes/LCSClientInternalID.ta.mjs";
// export { LCSClientInternalID, _enum_for_LCSClientInternalID, LCSClientInternalID_broadcastService /* IMPORTED_LONG_ENUMERATION_ITEM */, broadcastService /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientInternalID_o_andM_HPLMN /* IMPORTED_LONG_ENUMERATION_ITEM */, o_andM_HPLMN /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientInternalID_o_andM_VPLMN /* IMPORTED_LONG_ENUMERATION_ITEM */, o_andM_VPLMN /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientInternalID_anonymousLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, anonymousLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientInternalID_targetMSsubscribedService /* IMPORTED_LONG_ENUMERATION_ITEM */, targetMSsubscribedService /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LCSClientInternalID, _encode_LCSClientInternalID } from "../MAP-CommonDataTypes/LCSClientInternalID.ta.mjs";
import { LCSClientName, _decode_LCSClientName, _encode_LCSClientName } from "../MAP-LCS-DataTypes/LCSClientName.ta.mjs";
// export { LCSClientName, _decode_LCSClientName, _encode_LCSClientName } from "../MAP-LCS-DataTypes/LCSClientName.ta.mjs";
import { APN, _decode_APN, _encode_APN } from "../MAP-MS-DataTypes/APN.ta.mjs";
// export { APN, _decode_APN, _encode_APN } from "../MAP-MS-DataTypes/APN.ta.mjs";
import { LCSRequestorID, _decode_LCSRequestorID, _encode_LCSRequestorID } from "../MAP-LCS-DataTypes/LCSRequestorID.ta.mjs";
// export { LCSRequestorID, _decode_LCSRequestorID, _encode_LCSRequestorID } from "../MAP-LCS-DataTypes/LCSRequestorID.ta.mjs";


/**
 * @summary LCS_ClientID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCS-ClientID ::= SEQUENCE {
 *     lcsClientType    [0] LCSClientType,
 *     lcsClientExternalID    [1] LCSClientExternalID    OPTIONAL,
 *     lcsClientDialedByMS    [2] AddressString    OPTIONAL,
 *     lcsClientInternalID    [3] LCSClientInternalID    OPTIONAL,
 *     lcsClientName    [4] LCSClientName    OPTIONAL,
 *     ...,
 *     lcsAPN    [5] APN    OPTIONAL,
 *     lcsRequestorID    [6] LCSRequestorID    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LCS_ClientID {
    constructor (
        /**
         * @summary `lcsClientType`.
         * @public
         * @readonly
         */
        readonly lcsClientType: LCSClientType,
        /**
         * @summary `lcsClientExternalID`.
         * @public
         * @readonly
         */
        readonly lcsClientExternalID: OPTIONAL<LCSClientExternalID>,
        /**
         * @summary `lcsClientDialedByMS`.
         * @public
         * @readonly
         */
        readonly lcsClientDialedByMS: OPTIONAL<AddressString>,
        /**
         * @summary `lcsClientInternalID`.
         * @public
         * @readonly
         */
        readonly lcsClientInternalID: OPTIONAL<LCSClientInternalID>,
        /**
         * @summary `lcsClientName`.
         * @public
         * @readonly
         */
        readonly lcsClientName: OPTIONAL<LCSClientName>,
        /**
         * @summary `lcsAPN`.
         * @public
         * @readonly
         */
        readonly lcsAPN: OPTIONAL<APN>,
        /**
         * @summary `lcsRequestorID`.
         * @public
         * @readonly
         */
        readonly lcsRequestorID: OPTIONAL<LCSRequestorID>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LCS_ClientID
     * @description
     * 
     * This takes an `object` and converts it to a `LCS_ClientID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LCS_ClientID`.
     * @returns {LCS_ClientID}
     */
    public static _from_object (_o: { [_K in keyof (LCS_ClientID)]: (LCS_ClientID)[_K] }): LCS_ClientID {
        return new LCS_ClientID(_o.lcsClientType, _o.lcsClientExternalID, _o.lcsClientDialedByMS, _o.lcsClientInternalID, _o.lcsClientName, _o.lcsAPN, _o.lcsRequestorID, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `lcsClientType`
         * @public
         * @static
         */

    public static _enum_for_lcsClientType = _enum_for_LCSClientType;        /**
         * @summary The enum used as the type of the component `lcsClientInternalID`
         * @public
         * @static
         */

    public static _enum_for_lcsClientInternalID = _enum_for_LCSClientInternalID;
}

/**
 * @summary The Leading Root Component Types of LCS_ClientID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LCS_ClientID: $.ComponentSpec[] = [
    new $.ComponentSpec("lcsClientType", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("lcsClientExternalID", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("lcsClientDialedByMS", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("lcsClientInternalID", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("lcsClientName", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of LCS_ClientID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LCS_ClientID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LCS_ClientID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LCS_ClientID: $.ComponentSpec[] = [
    new $.ComponentSpec("lcsAPN", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("lcsRequestorID", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
];

let _cached_decoder_for_LCS_ClientID: $.ASN1Decoder<LCS_ClientID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCS_ClientID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCS_ClientID (el: _Element): LCS_ClientID {
    if (!_cached_decoder_for_LCS_ClientID) { _cached_decoder_for_LCS_ClientID = function (el: _Element): LCS_ClientID {
    let lcsClientType!: LCSClientType;
    let lcsClientExternalID: OPTIONAL<LCSClientExternalID>;
    let lcsClientDialedByMS: OPTIONAL<AddressString>;
    let lcsClientInternalID: OPTIONAL<LCSClientInternalID>;
    let lcsClientName: OPTIONAL<LCSClientName>;
    let lcsAPN: OPTIONAL<APN>;
    let lcsRequestorID: OPTIONAL<LCSRequestorID>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "lcsClientType": (_el: _Element): void => { lcsClientType = $._decode_implicit<LCSClientType>(() => _decode_LCSClientType)(_el); },
        "lcsClientExternalID": (_el: _Element): void => { lcsClientExternalID = $._decode_implicit<LCSClientExternalID>(() => _decode_LCSClientExternalID)(_el); },
        "lcsClientDialedByMS": (_el: _Element): void => { lcsClientDialedByMS = $._decode_implicit<AddressString>(() => _decode_AddressString)(_el); },
        "lcsClientInternalID": (_el: _Element): void => { lcsClientInternalID = $._decode_implicit<LCSClientInternalID>(() => _decode_LCSClientInternalID)(_el); },
        "lcsClientName": (_el: _Element): void => { lcsClientName = $._decode_implicit<LCSClientName>(() => _decode_LCSClientName)(_el); },
        "lcsAPN": (_el: _Element): void => { lcsAPN = $._decode_implicit<APN>(() => _decode_APN)(_el); },
        "lcsRequestorID": (_el: _Element): void => { lcsRequestorID = $._decode_implicit<LCSRequestorID>(() => _decode_LCSRequestorID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LCS_ClientID,
        _extension_additions_list_spec_for_LCS_ClientID,
        _root_component_type_list_2_spec_for_LCS_ClientID,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LCS_ClientID(
        lcsClientType,
        lcsClientExternalID,
        lcsClientDialedByMS,
        lcsClientInternalID,
        lcsClientName,
        lcsAPN,
        lcsRequestorID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LCS_ClientID(el);
}

let _cached_encoder_for_LCS_ClientID: $.ASN1Encoder<LCS_ClientID> | null = null;

/**
 * @summary Encodes a(n) LCS_ClientID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCS_ClientID, encoded as an ASN.1 Element.
 */
export
function _encode_LCS_ClientID (value: LCS_ClientID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCS_ClientID) { _cached_encoder_for_LCS_ClientID = function (value: LCS_ClientID, elGetter: $.ASN1Encoder<LCS_ClientID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_LCSClientType, $.BER)(value.lcsClientType, $.BER),
            /* IF_ABSENT  */ ((value.lcsClientExternalID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_LCSClientExternalID, $.BER)(value.lcsClientExternalID, $.BER)),
            /* IF_ABSENT  */ ((value.lcsClientDialedByMS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AddressString, $.BER)(value.lcsClientDialedByMS, $.BER)),
            /* IF_ABSENT  */ ((value.lcsClientInternalID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_LCSClientInternalID, $.BER)(value.lcsClientInternalID, $.BER)),
            /* IF_ABSENT  */ ((value.lcsClientName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_LCSClientName, $.BER)(value.lcsClientName, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.lcsAPN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_APN, $.BER)(value.lcsAPN, $.BER)),
            /* IF_ABSENT  */ ((value.lcsRequestorID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_LCSRequestorID, $.BER)(value.lcsRequestorID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LCS_ClientID(value, elGetter);
}


/* eslint-enable */
