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
import { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../Core-INAP-CS1-DataTypes/InformationToSend.ta.mjs";
// export { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../Core-INAP-CS1-DataTypes/InformationToSend.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";


/**
 * @summary PlayAnnouncementArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlayAnnouncementArg ::= SEQUENCE {
 *      informationToSend     [0] InformationToSend,
 *      disconnectFromIPForbidden     [1] BOOLEAN     DEFAULT TRUE,
 *      requestAnnouncementComplete     [2] BOOLEAN     DEFAULT TRUE,
 *      extensions     [3] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL
 * --  ...
 *      }
 * ```
 * 
 * @class
 */
export
class PlayAnnouncementArg {
    constructor (
        /**
         * @summary `informationToSend`.
         * @public
         * @readonly
         */
        readonly informationToSend: InformationToSend,
        /**
         * @summary `disconnectFromIPForbidden`.
         * @public
         * @readonly
         */
        readonly disconnectFromIPForbidden: OPTIONAL<BOOLEAN>,
        /**
         * @summary `requestAnnouncementComplete`.
         * @public
         * @readonly
         */
        readonly requestAnnouncementComplete: OPTIONAL<BOOLEAN>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a PlayAnnouncementArg
     * @description
     * 
     * This takes an `object` and converts it to a `PlayAnnouncementArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PlayAnnouncementArg`.
     * @returns {PlayAnnouncementArg}
     */
    public static _from_object (_o: { [_K in keyof (PlayAnnouncementArg)]: (PlayAnnouncementArg)[_K] }): PlayAnnouncementArg {
        return new PlayAnnouncementArg(_o.informationToSend, _o.disconnectFromIPForbidden, _o.requestAnnouncementComplete, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `disconnectFromIPForbidden`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_disconnectFromIPForbidden () { return true; }
    /**
     * @summary Getter that returns the default value for `requestAnnouncementComplete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_requestAnnouncementComplete () { return true; }
}

/**
 * @summary The Leading Root Component Types of PlayAnnouncementArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PlayAnnouncementArg: $.ComponentSpec[] = [
    new $.ComponentSpec("informationToSend", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("disconnectFromIPForbidden", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("requestAnnouncementComplete", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of PlayAnnouncementArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PlayAnnouncementArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PlayAnnouncementArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PlayAnnouncementArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PlayAnnouncementArg: $.ASN1Decoder<PlayAnnouncementArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PlayAnnouncementArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PlayAnnouncementArg (el: _Element): PlayAnnouncementArg {
    if (!_cached_decoder_for_PlayAnnouncementArg) { _cached_decoder_for_PlayAnnouncementArg = function (el: _Element): PlayAnnouncementArg {
    let informationToSend!: InformationToSend;
    let disconnectFromIPForbidden: OPTIONAL<BOOLEAN> = PlayAnnouncementArg._default_value_for_disconnectFromIPForbidden;
    let requestAnnouncementComplete: OPTIONAL<BOOLEAN> = PlayAnnouncementArg._default_value_for_requestAnnouncementComplete;
    let extensions: OPTIONAL<ExtensionField[]>;
    const callbacks: $.DecodingMap = {
        "informationToSend": (_el: _Element): void => { informationToSend = $._decode_explicit<InformationToSend>(() => _decode_InformationToSend)(_el); },
        "disconnectFromIPForbidden": (_el: _Element): void => { disconnectFromIPForbidden = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "requestAnnouncementComplete": (_el: _Element): void => { requestAnnouncementComplete = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PlayAnnouncementArg,
        _extension_additions_list_spec_for_PlayAnnouncementArg,
        _root_component_type_list_2_spec_for_PlayAnnouncementArg,
        undefined,
    );
    return new PlayAnnouncementArg(
        informationToSend,
        disconnectFromIPForbidden,
        requestAnnouncementComplete,
        extensions
    );
}; }
    return _cached_decoder_for_PlayAnnouncementArg(el);
}

let _cached_encoder_for_PlayAnnouncementArg: $.ASN1Encoder<PlayAnnouncementArg> | null = null;

/**
 * @summary Encodes a(n) PlayAnnouncementArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PlayAnnouncementArg, encoded as an ASN.1 Element.
 */
export
function _encode_PlayAnnouncementArg (value: PlayAnnouncementArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PlayAnnouncementArg) { _cached_encoder_for_PlayAnnouncementArg = function (value: PlayAnnouncementArg, elGetter: $.ASN1Encoder<PlayAnnouncementArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_InformationToSend, $.BER)(value.informationToSend, $.BER),
            /* IF_DEFAULT */ (value.disconnectFromIPForbidden === undefined || $.deepEq(value.disconnectFromIPForbidden, PlayAnnouncementArg._default_value_for_disconnectFromIPForbidden) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.disconnectFromIPForbidden, $.BER)),
            /* IF_DEFAULT */ (value.requestAnnouncementComplete === undefined || $.deepEq(value.requestAnnouncementComplete, PlayAnnouncementArg._default_value_for_requestAnnouncementComplete) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.requestAnnouncementComplete, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PlayAnnouncementArg(value, elGetter);
}


/* eslint-enable */
