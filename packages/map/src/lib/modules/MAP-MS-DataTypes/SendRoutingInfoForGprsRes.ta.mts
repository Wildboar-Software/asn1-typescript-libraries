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
import { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
// export { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
import { AbsentSubscriberDiagnosticSM, _decode_AbsentSubscriberDiagnosticSM, _encode_AbsentSubscriberDiagnosticSM } from "../MAP-ER-DataTypes/AbsentSubscriberDiagnosticSM.ta.mjs";
// export { AbsentSubscriberDiagnosticSM, _decode_AbsentSubscriberDiagnosticSM, _encode_AbsentSubscriberDiagnosticSM } from "../MAP-ER-DataTypes/AbsentSubscriberDiagnosticSM.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary SendRoutingInfoForGprsRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendRoutingInfoForGprsRes ::= SEQUENCE {
 *     sgsn-Address    [0] GSN-Address,
 *     ggsn-Address    [1]    GSN-Address    OPTIONAL,
 *     mobileNotReachableReason    [2]    AbsentSubscriberDiagnosticSM    OPTIONAL,
 *     extensionContainer    [3] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class SendRoutingInfoForGprsRes {
    constructor (
        /**
         * @summary `sgsn_Address`.
         * @public
         * @readonly
         */
        readonly sgsn_Address: GSN_Address,
        /**
         * @summary `ggsn_Address`.
         * @public
         * @readonly
         */
        readonly ggsn_Address: OPTIONAL<GSN_Address>,
        /**
         * @summary `mobileNotReachableReason`.
         * @public
         * @readonly
         */
        readonly mobileNotReachableReason: OPTIONAL<AbsentSubscriberDiagnosticSM>,
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
     * @summary Restructures an object into a SendRoutingInfoForGprsRes
     * @description
     * 
     * This takes an `object` and converts it to a `SendRoutingInfoForGprsRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendRoutingInfoForGprsRes`.
     * @returns {SendRoutingInfoForGprsRes}
     */
    public static _from_object (_o: { [_K in keyof (SendRoutingInfoForGprsRes)]: (SendRoutingInfoForGprsRes)[_K] }): SendRoutingInfoForGprsRes {
        return new SendRoutingInfoForGprsRes(_o.sgsn_Address, _o.ggsn_Address, _o.mobileNotReachableReason, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SendRoutingInfoForGprsRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendRoutingInfoForGprsRes: $.ComponentSpec[] = [
    new $.ComponentSpec("sgsn-Address", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("ggsn-Address", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("mobileNotReachableReason", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SendRoutingInfoForGprsRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendRoutingInfoForGprsRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendRoutingInfoForGprsRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendRoutingInfoForGprsRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendRoutingInfoForGprsRes: $.ASN1Decoder<SendRoutingInfoForGprsRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendRoutingInfoForGprsRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendRoutingInfoForGprsRes (el: _Element): SendRoutingInfoForGprsRes {
    if (!_cached_decoder_for_SendRoutingInfoForGprsRes) { _cached_decoder_for_SendRoutingInfoForGprsRes = function (el: _Element): SendRoutingInfoForGprsRes {
    let sgsn_Address!: GSN_Address;
    let ggsn_Address: OPTIONAL<GSN_Address>;
    let mobileNotReachableReason: OPTIONAL<AbsentSubscriberDiagnosticSM>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sgsn-Address": (_el: _Element): void => { sgsn_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "ggsn-Address": (_el: _Element): void => { ggsn_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "mobileNotReachableReason": (_el: _Element): void => { mobileNotReachableReason = $._decode_implicit<AbsentSubscriberDiagnosticSM>(() => _decode_AbsentSubscriberDiagnosticSM)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendRoutingInfoForGprsRes,
        _extension_additions_list_spec_for_SendRoutingInfoForGprsRes,
        _root_component_type_list_2_spec_for_SendRoutingInfoForGprsRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendRoutingInfoForGprsRes(
        sgsn_Address,
        ggsn_Address,
        mobileNotReachableReason,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SendRoutingInfoForGprsRes(el);
}

let _cached_encoder_for_SendRoutingInfoForGprsRes: $.ASN1Encoder<SendRoutingInfoForGprsRes> | null = null;

/**
 * @summary Encodes a(n) SendRoutingInfoForGprsRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendRoutingInfoForGprsRes, encoded as an ASN.1 Element.
 */
export
function _encode_SendRoutingInfoForGprsRes (value: SendRoutingInfoForGprsRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendRoutingInfoForGprsRes) { _cached_encoder_for_SendRoutingInfoForGprsRes = function (value: SendRoutingInfoForGprsRes, elGetter: $.ASN1Encoder<SendRoutingInfoForGprsRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_GSN_Address, $.BER)(value.sgsn_Address, $.BER),
            /* IF_ABSENT  */ ((value.ggsn_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GSN_Address, $.BER)(value.ggsn_Address, $.BER)),
            /* IF_ABSENT  */ ((value.mobileNotReachableReason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AbsentSubscriberDiagnosticSM, $.BER)(value.mobileNotReachableReason, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendRoutingInfoForGprsRes(value, elGetter);
}


/* eslint-enable */
