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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { BasicServiceList, _decode_BasicServiceList, _encode_BasicServiceList } from "../MAP-MS-DataTypes/BasicServiceList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary MSISDN_BS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSISDN-BS ::= SEQUENCE {
 *     msisdn    ISDN-AddressString,    
 *     basicServiceList    [0]    BasicServiceList    OPTIONAL,
 *     extensionContainer    [1]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class MSISDN_BS {
    constructor (
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: ISDN_AddressString,
        /**
         * @summary `basicServiceList`.
         * @public
         * @readonly
         */
        readonly basicServiceList: OPTIONAL<BasicServiceList>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MSISDN_BS
     * @description
     * 
     * This takes an `object` and converts it to a `MSISDN_BS`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MSISDN_BS`.
     * @returns {MSISDN_BS}
     */
    public static _from_object (_o: { [_K in keyof (MSISDN_BS)]: (MSISDN_BS)[_K] }): MSISDN_BS {
        return new MSISDN_BS(_o.msisdn, _o.basicServiceList, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MSISDN_BS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MSISDN_BS: $.ComponentSpec[] = [
    new $.ComponentSpec("msisdn", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("basicServiceList", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MSISDN_BS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MSISDN_BS: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MSISDN_BS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MSISDN_BS: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MSISDN_BS: $.ASN1Decoder<MSISDN_BS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSISDN_BS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MSISDN_BS (el: _Element): MSISDN_BS {
    if (!_cached_decoder_for_MSISDN_BS) { _cached_decoder_for_MSISDN_BS = function (el: _Element): MSISDN_BS {
    let msisdn!: ISDN_AddressString;
    let basicServiceList: OPTIONAL<BasicServiceList> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "msisdn": (_el: _Element): void => { msisdn = _decode_ISDN_AddressString(_el); },
        "basicServiceList": (_el: _Element): void => { basicServiceList = $._decode_implicit<BasicServiceList>(() => _decode_BasicServiceList)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MSISDN_BS,
        _extension_additions_list_spec_for_MSISDN_BS,
        _root_component_type_list_2_spec_for_MSISDN_BS,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MSISDN_BS(
        msisdn,
        basicServiceList,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MSISDN_BS(el);
}

let _cached_encoder_for_MSISDN_BS: $.ASN1Encoder<MSISDN_BS> | null = null;

/**
 * @summary Encodes a(n) MSISDN_BS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSISDN_BS, encoded as an ASN.1 Element.
 */
export
function _encode_MSISDN_BS (value: MSISDN_BS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MSISDN_BS) { _cached_encoder_for_MSISDN_BS = function (value: MSISDN_BS, elGetter: $.ASN1Encoder<MSISDN_BS>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ISDN_AddressString(value.msisdn, $.BER),
            /* IF_ABSENT  */ ((value.basicServiceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_BasicServiceList, $.BER)(value.basicServiceList, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MSISDN_BS(value, elGetter);
}


/* eslint-enable */
