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
import { APN, _decode_APN, _encode_APN } from "../MAP-MS-DataTypes/APN.ta.mjs";
import { PDN_GW_Identity, _decode_PDN_GW_Identity, _encode_PDN_GW_Identity } from "../MAP-MS-DataTypes/PDN-GW-Identity.ta.mjs";
import { ContextId, _decode_ContextId, _encode_ContextId } from "../MAP-MS-DataTypes/ContextId.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary PDN_GW_Update
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDN-GW-Update ::= SEQUENCE{
 *     apn    [0] APN    OPTIONAL,
 *     pdn-gw-Identity    [1] PDN-GW-Identity    OPTIONAL,
 *     contextId    [2] ContextId                     OPTIONAL,
 *     extensionContainer    [3] ExtensionContainer    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class PDN_GW_Update {
    constructor (
        /**
         * @summary `apn`.
         * @public
         * @readonly
         */
        readonly apn: OPTIONAL<APN>,
        /**
         * @summary `pdn_gw_Identity`.
         * @public
         * @readonly
         */
        readonly pdn_gw_Identity: OPTIONAL<PDN_GW_Identity>,
        /**
         * @summary `contextId`.
         * @public
         * @readonly
         */
        readonly contextId: OPTIONAL<ContextId>,
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
     * @summary Restructures an object into a PDN_GW_Update
     * @description
     * 
     * This takes an `object` and converts it to a `PDN_GW_Update`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDN_GW_Update`.
     * @returns {PDN_GW_Update}
     */
    public static _from_object (_o: { [_K in keyof (PDN_GW_Update)]: (PDN_GW_Update)[_K] }): PDN_GW_Update {
        return new PDN_GW_Update(_o.apn, _o.pdn_gw_Identity, _o.contextId, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PDN_GW_Update
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PDN_GW_Update: $.ComponentSpec[] = [
    new $.ComponentSpec("apn", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pdn-gw-Identity", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("contextId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PDN_GW_Update
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PDN_GW_Update: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PDN_GW_Update
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PDN_GW_Update: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PDN_GW_Update: $.ASN1Decoder<PDN_GW_Update> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDN_GW_Update
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDN_GW_Update (el: _Element): PDN_GW_Update {
    if (!_cached_decoder_for_PDN_GW_Update) { _cached_decoder_for_PDN_GW_Update = function (el: _Element): PDN_GW_Update {
    let apn: OPTIONAL<APN> = undefined;
    let pdn_gw_Identity: OPTIONAL<PDN_GW_Identity> = undefined;
    let contextId: OPTIONAL<ContextId> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "apn": (_el: _Element): void => { apn = $._decode_implicit<APN>(() => _decode_APN)(_el); },
        "pdn-gw-Identity": (_el: _Element): void => { pdn_gw_Identity = $._decode_implicit<PDN_GW_Identity>(() => _decode_PDN_GW_Identity)(_el); },
        "contextId": (_el: _Element): void => { contextId = $._decode_implicit<ContextId>(() => _decode_ContextId)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PDN_GW_Update,
        _extension_additions_list_spec_for_PDN_GW_Update,
        _root_component_type_list_2_spec_for_PDN_GW_Update,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PDN_GW_Update(
        apn,
        pdn_gw_Identity,
        contextId,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PDN_GW_Update(el);
}

let _cached_encoder_for_PDN_GW_Update: $.ASN1Encoder<PDN_GW_Update> | null = null;

/**
 * @summary Encodes a(n) PDN_GW_Update into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDN_GW_Update, encoded as an ASN.1 Element.
 */
export
function _encode_PDN_GW_Update (value: PDN_GW_Update, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDN_GW_Update) { _cached_encoder_for_PDN_GW_Update = function (value: PDN_GW_Update, elGetter: $.ASN1Encoder<PDN_GW_Update>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.apn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_APN, $.BER)(value.apn, $.BER)),
            /* IF_ABSENT  */ ((value.pdn_gw_Identity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PDN_GW_Identity, $.BER)(value.pdn_gw_Identity, $.BER)),
            /* IF_ABSENT  */ ((value.contextId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ContextId, $.BER)(value.contextId, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PDN_GW_Update(value, elGetter);
}


/* eslint-enable */
