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
import { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../HI2Operations/DataNodeAddress.ta.mjs";
// export { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../HI2Operations/DataNodeAddress.ta.mjs";
import { LogicalFunctionType, _enum_for_LogicalFunctionType, LogicalFunctionType_pDNGW /* IMPORTED_LONG_ENUMERATION_ITEM */, pDNGW /* IMPORTED_SHORT_ENUMERATION_ITEM */, LogicalFunctionType_mME /* IMPORTED_LONG_ENUMERATION_ITEM */, mME /* IMPORTED_SHORT_ENUMERATION_ITEM */, LogicalFunctionType_sGW /* IMPORTED_LONG_ENUMERATION_ITEM */, sGW /* IMPORTED_SHORT_ENUMERATION_ITEM */, LogicalFunctionType_ePDG /* IMPORTED_LONG_ENUMERATION_ITEM */, ePDG /* IMPORTED_SHORT_ENUMERATION_ITEM */, LogicalFunctionType_hSS /* IMPORTED_LONG_ENUMERATION_ITEM */, hSS /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LogicalFunctionType, _encode_LogicalFunctionType } from "../EpsHI2Operations/LogicalFunctionType.ta.mjs";
// export { LogicalFunctionType, _enum_for_LogicalFunctionType, LogicalFunctionType_pDNGW /* IMPORTED_LONG_ENUMERATION_ITEM */, pDNGW /* IMPORTED_SHORT_ENUMERATION_ITEM */, LogicalFunctionType_mME /* IMPORTED_LONG_ENUMERATION_ITEM */, mME /* IMPORTED_SHORT_ENUMERATION_ITEM */, LogicalFunctionType_sGW /* IMPORTED_LONG_ENUMERATION_ITEM */, sGW /* IMPORTED_SHORT_ENUMERATION_ITEM */, LogicalFunctionType_ePDG /* IMPORTED_LONG_ENUMERATION_ITEM */, ePDG /* IMPORTED_SHORT_ENUMERATION_ITEM */, LogicalFunctionType_hSS /* IMPORTED_LONG_ENUMERATION_ITEM */, hSS /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LogicalFunctionType, _encode_LogicalFunctionType } from "../EpsHI2Operations/LogicalFunctionType.ta.mjs";


/**
 * @summary DataNodeIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataNodeIdentifier ::= SEQUENCE
 * {
 *  dataNodeAddress [1] DataNodeAddress OPTIONAL,
 *  logicalFunctionType [2] LogicalFunctionType OPTIONAL,
 *  dataNodeName [3] PrintableString(SIZE(7..25)) OPTIONAL,
 *  --Unique identifier of a Data Node within the CSP domain. Could be a name/number combination.
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class DataNodeIdentifier {
    constructor (
        /**
         * @summary `dataNodeAddress`.
         * @public
         * @readonly
         */
        readonly dataNodeAddress: OPTIONAL<DataNodeAddress>,
        /**
         * @summary `logicalFunctionType`.
         * @public
         * @readonly
         */
        readonly logicalFunctionType: OPTIONAL<LogicalFunctionType>,
        /**
         * @summary `dataNodeName`.
         * @public
         * @readonly
         */
        readonly dataNodeName: OPTIONAL<PrintableString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DataNodeIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `DataNodeIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataNodeIdentifier`.
     * @returns {DataNodeIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (DataNodeIdentifier)]: (DataNodeIdentifier)[_K] }): DataNodeIdentifier {
        return new DataNodeIdentifier(_o.dataNodeAddress, _o.logicalFunctionType, _o.dataNodeName, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `logicalFunctionType`
         * @public
         * @static
         */

    public static _enum_for_logicalFunctionType = _enum_for_LogicalFunctionType;
}

/**
 * @summary The Leading Root Component Types of DataNodeIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DataNodeIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("dataNodeAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("logicalFunctionType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dataNodeName", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of DataNodeIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DataNodeIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DataNodeIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DataNodeIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DataNodeIdentifier: $.ASN1Decoder<DataNodeIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataNodeIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataNodeIdentifier (el: _Element): DataNodeIdentifier {
    if (!_cached_decoder_for_DataNodeIdentifier) { _cached_decoder_for_DataNodeIdentifier = function (el: _Element): DataNodeIdentifier {
    let dataNodeAddress: OPTIONAL<DataNodeAddress>;
    let logicalFunctionType: OPTIONAL<LogicalFunctionType>;
    let dataNodeName: OPTIONAL<PrintableString>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dataNodeAddress": (_el: _Element): void => { dataNodeAddress = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); },
        "logicalFunctionType": (_el: _Element): void => { logicalFunctionType = $._decode_implicit<LogicalFunctionType>(() => _decode_LogicalFunctionType)(_el); },
        "dataNodeName": (_el: _Element): void => { dataNodeName = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DataNodeIdentifier,
        _extension_additions_list_spec_for_DataNodeIdentifier,
        _root_component_type_list_2_spec_for_DataNodeIdentifier,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DataNodeIdentifier(
        dataNodeAddress,
        logicalFunctionType,
        dataNodeName,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DataNodeIdentifier(el);
}

let _cached_encoder_for_DataNodeIdentifier: $.ASN1Encoder<DataNodeIdentifier> | null = null;

/**
 * @summary Encodes a(n) DataNodeIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataNodeIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_DataNodeIdentifier (value: DataNodeIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataNodeIdentifier) { _cached_encoder_for_DataNodeIdentifier = function (value: DataNodeIdentifier, elGetter: $.ASN1Encoder<DataNodeIdentifier>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.dataNodeAddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_DataNodeAddress, $.BER)(value.dataNodeAddress, $.BER)),
            /* IF_ABSENT  */ ((value.logicalFunctionType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_LogicalFunctionType, $.BER)(value.logicalFunctionType, $.BER)),
            /* IF_ABSENT  */ ((value.dataNodeName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodePrintableString, $.BER)(value.dataNodeName, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DataNodeIdentifier(value, elGetter);
}


/* eslint-enable */
