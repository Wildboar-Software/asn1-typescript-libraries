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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
// export { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary SendRoutingInfoForGprsArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendRoutingInfoForGprsArg ::= SEQUENCE {
 *     imsi    [0] IMSI,
 *     ggsn-Address    [1] GSN-Address    OPTIONAL, 
 *     ggsn-Number    [2]    ISDN-AddressString,
 *     extensionContainer    [3] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class SendRoutingInfoForGprsArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `ggsn_Address`.
         * @public
         * @readonly
         */
        readonly ggsn_Address: OPTIONAL<GSN_Address>,
        /**
         * @summary `ggsn_Number`.
         * @public
         * @readonly
         */
        readonly ggsn_Number: ISDN_AddressString,
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
     * @summary Restructures an object into a SendRoutingInfoForGprsArg
     * @description
     * 
     * This takes an `object` and converts it to a `SendRoutingInfoForGprsArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendRoutingInfoForGprsArg`.
     * @returns {SendRoutingInfoForGprsArg}
     */
    public static _from_object (_o: { [_K in keyof (SendRoutingInfoForGprsArg)]: (SendRoutingInfoForGprsArg)[_K] }): SendRoutingInfoForGprsArg {
        return new SendRoutingInfoForGprsArg(_o.imsi, _o.ggsn_Address, _o.ggsn_Number, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SendRoutingInfoForGprsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendRoutingInfoForGprsArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("ggsn-Address", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("ggsn-Number", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SendRoutingInfoForGprsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendRoutingInfoForGprsArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendRoutingInfoForGprsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendRoutingInfoForGprsArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendRoutingInfoForGprsArg: $.ASN1Decoder<SendRoutingInfoForGprsArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendRoutingInfoForGprsArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendRoutingInfoForGprsArg (el: _Element): SendRoutingInfoForGprsArg {
    if (!_cached_decoder_for_SendRoutingInfoForGprsArg) { _cached_decoder_for_SendRoutingInfoForGprsArg = function (el: _Element): SendRoutingInfoForGprsArg {
    let imsi!: IMSI;
    let ggsn_Address: OPTIONAL<GSN_Address>;
    let ggsn_Number!: ISDN_AddressString;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "ggsn-Address": (_el: _Element): void => { ggsn_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "ggsn-Number": (_el: _Element): void => { ggsn_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendRoutingInfoForGprsArg,
        _extension_additions_list_spec_for_SendRoutingInfoForGprsArg,
        _root_component_type_list_2_spec_for_SendRoutingInfoForGprsArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendRoutingInfoForGprsArg(
        imsi,
        ggsn_Address,
        ggsn_Number,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SendRoutingInfoForGprsArg(el);
}

let _cached_encoder_for_SendRoutingInfoForGprsArg: $.ASN1Encoder<SendRoutingInfoForGprsArg> | null = null;

/**
 * @summary Encodes a(n) SendRoutingInfoForGprsArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendRoutingInfoForGprsArg, encoded as an ASN.1 Element.
 */
export
function _encode_SendRoutingInfoForGprsArg (value: SendRoutingInfoForGprsArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendRoutingInfoForGprsArg) { _cached_encoder_for_SendRoutingInfoForGprsArg = function (value: SendRoutingInfoForGprsArg, elGetter: $.ASN1Encoder<SendRoutingInfoForGprsArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER)(value.imsi, $.BER),
            /* IF_ABSENT  */ ((value.ggsn_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GSN_Address, $.BER)(value.ggsn_Address, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ISDN_AddressString, $.BER)(value.ggsn_Number, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendRoutingInfoForGprsArg(value, elGetter);
}


/* eslint-enable */
