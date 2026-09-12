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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
import { LoadData, _decode_LoadData, _encode_LoadData } from "../ISO-9506-MMS-1/LoadData.ta.mjs";
// export { LoadData, _decode_LoadData, _encode_LoadData } from "../ISO-9506-MMS-1/LoadData.ta.mjs";


/**
 * @summary ControlElement_beginDomainDef
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlElement-beginDomainDef ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ControlElement_beginDomainDef {
    constructor (
        /**
         * @summary `domainName`.
         * @public
         * @readonly
         */
        readonly domainName: Identifier,
        /**
         * @summary `capabilities`.
         * @public
         * @readonly
         */
        readonly capabilities: MMSString[],
        /**
         * @summary `sharable`.
         * @public
         * @readonly
         */
        readonly sharable: BOOLEAN,
        /**
         * @summary `loadData`.
         * @public
         * @readonly
         */
        readonly loadData: OPTIONAL<LoadData>
    ) {}

    /**
     * @summary Restructures an object into a ControlElement_beginDomainDef
     * @description
     * 
     * This takes an `object` and converts it to a `ControlElement_beginDomainDef`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ControlElement_beginDomainDef`.
     * @returns {ControlElement_beginDomainDef}
     */
    public static _from_object (_o: { [_K in keyof (ControlElement_beginDomainDef)]: (ControlElement_beginDomainDef)[_K] }): ControlElement_beginDomainDef {
        return new ControlElement_beginDomainDef(_o.domainName, _o.capabilities, _o.sharable, _o.loadData);
    }


}

/**
 * @summary The Leading Root Component Types of ControlElement_beginDomainDef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ControlElement_beginDomainDef: $.ComponentSpec[] = [
    new $.ComponentSpec("domainName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("capabilities", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sharable", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("loadData", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ControlElement_beginDomainDef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ControlElement_beginDomainDef: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ControlElement_beginDomainDef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ControlElement_beginDomainDef: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ControlElement_beginDomainDef: $.ASN1Decoder<ControlElement_beginDomainDef> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlElement_beginDomainDef
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ControlElement_beginDomainDef (el: _Element): ControlElement_beginDomainDef {
    if (!_cached_decoder_for_ControlElement_beginDomainDef) { _cached_decoder_for_ControlElement_beginDomainDef = function (el: _Element): ControlElement_beginDomainDef {
    let domainName!: Identifier;
    let capabilities!: MMSString[];
    let sharable!: BOOLEAN;
    let loadData: OPTIONAL<LoadData>;
    const callbacks: $.DecodingMap = {
        "domainName": (_el: _Element): void => { domainName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "capabilities": (_el: _Element): void => { capabilities = $._decode_implicit<MMSString[]>(() => $._decodeSequenceOf<MMSString>(() => _decode_MMSString))(_el); },
        "sharable": (_el: _Element): void => { sharable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "loadData": (_el: _Element): void => { loadData = $._decode_explicit<LoadData>(() => _decode_LoadData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ControlElement_beginDomainDef,
        _extension_additions_list_spec_for_ControlElement_beginDomainDef,
        _root_component_type_list_2_spec_for_ControlElement_beginDomainDef,
        undefined,
    );
    return new ControlElement_beginDomainDef(
        domainName,
        capabilities,
        sharable,
        loadData
    );
}; }
    return _cached_decoder_for_ControlElement_beginDomainDef(el);
}

let _cached_encoder_for_ControlElement_beginDomainDef: $.ASN1Encoder<ControlElement_beginDomainDef> | null = null;

/**
 * @summary Encodes a(n) ControlElement_beginDomainDef into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlElement_beginDomainDef, encoded as an ASN.1 Element.
 */
export
function _encode_ControlElement_beginDomainDef (value: ControlElement_beginDomainDef, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ControlElement_beginDomainDef) { _cached_encoder_for_ControlElement_beginDomainDef = function (value: ControlElement_beginDomainDef, elGetter: $.ASN1Encoder<ControlElement_beginDomainDef>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER)(value.domainName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<MMSString>(() => _encode_MMSString, $.BER), $.BER)(value.capabilities, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.sharable, $.BER),
            /* IF_ABSENT  */ ((value.loadData === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_LoadData, $.BER)(value.loadData, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ControlElement_beginDomainDef(value, elGetter);
}


/* eslint-enable */
