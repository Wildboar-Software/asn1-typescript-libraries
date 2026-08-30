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
import { MatchType, _enum_for_MatchType, MatchType_inhibiting /* IMPORTED_LONG_ENUMERATION_ITEM */, inhibiting /* IMPORTED_SHORT_ENUMERATION_ITEM */, MatchType_enabling /* IMPORTED_LONG_ENUMERATION_ITEM */, enabling /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MatchType, _encode_MatchType } from "../MAP-MS-DataTypes/MatchType.ta.mjs";
import { DestinationNumberList, _decode_DestinationNumberList, _encode_DestinationNumberList } from "../MAP-MS-DataTypes/DestinationNumberList.ta.mjs";
import { DestinationNumberLengthList, _decode_DestinationNumberLengthList, _encode_DestinationNumberLengthList } from "../MAP-MS-DataTypes/DestinationNumberLengthList.ta.mjs";


/**
 * @summary DestinationNumberCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationNumberCriteria ::= SEQUENCE {
 *     matchType    [0] MatchType,
 *     destinationNumberList    [1] DestinationNumberList    OPTIONAL,
 *     destinationNumberLengthList    [2] DestinationNumberLengthList    OPTIONAL,
 *     -- one or both of destinationNumberList and destinationNumberLengthList 
 *     -- shall be present
 *     ...}
 * ```
 * 
 * @class
 */
export
class DestinationNumberCriteria {
    constructor (
        /**
         * @summary `matchType`.
         * @public
         * @readonly
         */
        readonly matchType: MatchType,
        /**
         * @summary `destinationNumberList`.
         * @public
         * @readonly
         */
        readonly destinationNumberList: OPTIONAL<DestinationNumberList>,
        /**
         * @summary `destinationNumberLengthList`.
         * @public
         * @readonly
         */
        readonly destinationNumberLengthList: OPTIONAL<DestinationNumberLengthList>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DestinationNumberCriteria
     * @description
     * 
     * This takes an `object` and converts it to a `DestinationNumberCriteria`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DestinationNumberCriteria`.
     * @returns {DestinationNumberCriteria}
     */
    public static _from_object (_o: { [_K in keyof (DestinationNumberCriteria)]: (DestinationNumberCriteria)[_K] }): DestinationNumberCriteria {
        return new DestinationNumberCriteria(_o.matchType, _o.destinationNumberList, _o.destinationNumberLengthList, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `matchType`
         * @public
         * @static
         */

    public static _enum_for_matchType = _enum_for_MatchType;
}

/**
 * @summary The Leading Root Component Types of DestinationNumberCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DestinationNumberCriteria: $.ComponentSpec[] = [
    new $.ComponentSpec("matchType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("destinationNumberList", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("destinationNumberLengthList", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DestinationNumberCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DestinationNumberCriteria: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DestinationNumberCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DestinationNumberCriteria: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DestinationNumberCriteria: $.ASN1Decoder<DestinationNumberCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DestinationNumberCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DestinationNumberCriteria (el: _Element): DestinationNumberCriteria {
    if (!_cached_decoder_for_DestinationNumberCriteria) { _cached_decoder_for_DestinationNumberCriteria = function (el: _Element): DestinationNumberCriteria {
    let matchType!: MatchType;
    let destinationNumberList: OPTIONAL<DestinationNumberList> = undefined;
    let destinationNumberLengthList: OPTIONAL<DestinationNumberLengthList> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "matchType": (_el: _Element): void => { matchType = $._decode_implicit<MatchType>(() => _decode_MatchType)(_el); },
        "destinationNumberList": (_el: _Element): void => { destinationNumberList = $._decode_implicit<DestinationNumberList>(() => _decode_DestinationNumberList)(_el); },
        "destinationNumberLengthList": (_el: _Element): void => { destinationNumberLengthList = $._decode_implicit<DestinationNumberLengthList>(() => _decode_DestinationNumberLengthList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DestinationNumberCriteria,
        _extension_additions_list_spec_for_DestinationNumberCriteria,
        _root_component_type_list_2_spec_for_DestinationNumberCriteria,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DestinationNumberCriteria(
        matchType,
        destinationNumberList,
        destinationNumberLengthList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DestinationNumberCriteria(el);
}

let _cached_encoder_for_DestinationNumberCriteria: $.ASN1Encoder<DestinationNumberCriteria> | null = null;

/**
 * @summary Encodes a(n) DestinationNumberCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationNumberCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_DestinationNumberCriteria (value: DestinationNumberCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DestinationNumberCriteria) { _cached_encoder_for_DestinationNumberCriteria = function (value: DestinationNumberCriteria, elGetter: $.ASN1Encoder<DestinationNumberCriteria>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MatchType, $.BER)(value.matchType, $.BER),
            /* IF_ABSENT  */ ((value.destinationNumberList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DestinationNumberList, $.BER)(value.destinationNumberList, $.BER)),
            /* IF_ABSENT  */ ((value.destinationNumberLengthList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_DestinationNumberLengthList, $.BER)(value.destinationNumberLengthList, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DestinationNumberCriteria(value, elGetter);
}


/* eslint-enable */
