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
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
import { ConsultOptions, _enum_for_ConsultOptions, ConsultOptions_unrestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, unrestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConsultOptions_consultOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, consultOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConsultOptions_transferOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, transferOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConsultOptions_conferenceOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, conferenceOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ConsultOptions, _encode_ConsultOptions } from "../CSTA-call-control/ConsultOptions.ta.mjs";
// export { ConsultOptions, _enum_for_ConsultOptions, ConsultOptions_unrestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, unrestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConsultOptions_consultOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, consultOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConsultOptions_transferOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, transferOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConsultOptions_conferenceOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, conferenceOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ConsultOptions, _encode_ConsultOptions } from "../CSTA-call-control/ConsultOptions.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary AlternateCallArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateCallArgument ::= SEQUENCE
 * {     heldCall             ConnectionID,
 *     activeCall             ConnectionID,
 *     connectionReservation         BOOLEAN             OPTIONAL,
 *     consultOptions             ConsultOptions             DEFAULT unrestricted,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AlternateCallArgument {
    constructor (
        /**
         * @summary `heldCall`.
         * @public
         * @readonly
         */
        readonly heldCall: ConnectionID,
        /**
         * @summary `activeCall`.
         * @public
         * @readonly
         */
        readonly activeCall: ConnectionID,
        /**
         * @summary `connectionReservation`.
         * @public
         * @readonly
         */
        readonly connectionReservation: OPTIONAL<BOOLEAN>,
        /**
         * @summary `consultOptions`.
         * @public
         * @readonly
         */
        readonly consultOptions: OPTIONAL<ConsultOptions>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a AlternateCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `AlternateCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlternateCallArgument`.
     * @returns {AlternateCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (AlternateCallArgument)]: (AlternateCallArgument)[_K] }): AlternateCallArgument {
        return new AlternateCallArgument(_o.heldCall, _o.activeCall, _o.connectionReservation, _o.consultOptions, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `consultOptions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_consultOptions () { return ConsultOptions_unrestricted; }        /**
         * @summary The enum used as the type of the component `consultOptions`
         * @public
         * @static
         */

    public static _enum_for_consultOptions = _enum_for_ConsultOptions;
}

/**
 * @summary The Leading Root Component Types of AlternateCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AlternateCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("heldCall", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("activeCall", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("connectionReservation", true, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("consultOptions", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AlternateCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AlternateCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AlternateCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AlternateCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AlternateCallArgument: $.ASN1Decoder<AlternateCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternateCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternateCallArgument (el: _Element): AlternateCallArgument {
    if (!_cached_decoder_for_AlternateCallArgument) { _cached_decoder_for_AlternateCallArgument = function (el: _Element): AlternateCallArgument {
    let heldCall!: ConnectionID;
    let activeCall!: ConnectionID;
    let connectionReservation: OPTIONAL<BOOLEAN>;
    let consultOptions: OPTIONAL<ConsultOptions> = AlternateCallArgument._default_value_for_consultOptions;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "heldCall": (_el: _Element): void => { heldCall = _decode_ConnectionID(_el); },
        "activeCall": (_el: _Element): void => { activeCall = _decode_ConnectionID(_el); },
        "connectionReservation": (_el: _Element): void => { connectionReservation = $._decodeBoolean(_el); },
        "consultOptions": (_el: _Element): void => { consultOptions = _decode_ConsultOptions(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AlternateCallArgument,
        _extension_additions_list_spec_for_AlternateCallArgument,
        _root_component_type_list_2_spec_for_AlternateCallArgument,
        undefined,
    );
    return new AlternateCallArgument(
        heldCall,
        activeCall,
        connectionReservation,
        consultOptions,
        extensions
    );
}; }
    return _cached_decoder_for_AlternateCallArgument(el);
}

let _cached_encoder_for_AlternateCallArgument: $.ASN1Encoder<AlternateCallArgument> | null = null;

/**
 * @summary Encodes a(n) AlternateCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternateCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_AlternateCallArgument (value: AlternateCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternateCallArgument) { _cached_encoder_for_AlternateCallArgument = function (value: AlternateCallArgument, elGetter: $.ASN1Encoder<AlternateCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.heldCall, $.BER),
            /* REQUIRED   */ _encode_ConnectionID(value.activeCall, $.BER),
            /* IF_ABSENT  */ ((value.connectionReservation === undefined) ? undefined : $._encodeBoolean(value.connectionReservation, $.BER)),
            /* IF_DEFAULT */ (value.consultOptions === undefined || $.deepEq(value.consultOptions, AlternateCallArgument._default_value_for_consultOptions) ? undefined : _encode_ConsultOptions(value.consultOptions, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AlternateCallArgument(value, elGetter);
}


/* eslint-enable */
