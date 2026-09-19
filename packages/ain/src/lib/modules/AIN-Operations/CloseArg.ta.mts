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
import { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
// export { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
import { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
import { CloseCause, _decode_CloseCause, _encode_CloseCause } from "../AIN-Parameters/CloseCause.ta.mjs";
// export { CloseCause, _decode_CloseCause, _encode_CloseCause } from "../AIN-Parameters/CloseCause.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary CloseArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CloseArg ::= SEQUENCE{
 *             userID UserID OPTIONAL,
 *             bearerCapability              BearerCapability OPTIONAL,
 *             closeCause                    CloseCause OPTIONAL,
 *             amp1                          Amp1 OPTIONAL,
 *             amp2                          Amp2 OPTIONAL,
 *             extensionParameter            [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class CloseArg {
    constructor (
        /**
         * @summary `userID`.
         * @public
         * @readonly
         */
        readonly userID: OPTIONAL<UserID>,
        /**
         * @summary `bearerCapability`.
         * @public
         * @readonly
         */
        readonly bearerCapability: OPTIONAL<BearerCapability>,
        /**
         * @summary `closeCause`.
         * @public
         * @readonly
         */
        readonly closeCause: OPTIONAL<CloseCause>,
        /**
         * @summary `amp1`.
         * @public
         * @readonly
         */
        readonly amp1: OPTIONAL<Amp1>,
        /**
         * @summary `amp2`.
         * @public
         * @readonly
         */
        readonly amp2: OPTIONAL<Amp2>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a CloseArg
     * @description
     * 
     * This takes an `object` and converts it to a `CloseArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CloseArg`.
     * @returns {CloseArg}
     */
    public static _from_object (_o: { [_K in keyof (CloseArg)]: (CloseArg)[_K] }): CloseArg {
        return new CloseArg(_o.userID, _o.bearerCapability, _o.closeCause, _o.amp1, _o.amp2, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of CloseArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CloseArg: $.ComponentSpec[] = [
    new $.ComponentSpec("userID", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("bearerCapability", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("closeCause", true, $.hasTag(_TagClass.context, 72)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of CloseArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CloseArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CloseArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CloseArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CloseArg: $.ASN1Decoder<CloseArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CloseArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CloseArg (el: _Element): CloseArg {
    if (!_cached_decoder_for_CloseArg) { _cached_decoder_for_CloseArg = function (el: _Element): CloseArg {
    let userID: OPTIONAL<UserID>;
    let bearerCapability: OPTIONAL<BearerCapability>;
    let closeCause: OPTIONAL<CloseCause>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "userID": (_el: _Element): void => { userID = _decode_UserID(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = _decode_BearerCapability(_el); },
        "closeCause": (_el: _Element): void => { closeCause = _decode_CloseCause(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CloseArg,
        _extension_additions_list_spec_for_CloseArg,
        _root_component_type_list_2_spec_for_CloseArg,
        undefined,
    );
    return new CloseArg(
        userID,
        bearerCapability,
        closeCause,
        amp1,
        amp2,
        extensionParameter
    );
}; }
    return _cached_decoder_for_CloseArg(el);
}

let _cached_encoder_for_CloseArg: $.ASN1Encoder<CloseArg> | null = null;

/**
 * @summary Encodes a(n) CloseArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CloseArg, encoded as an ASN.1 Element.
 */
export
function _encode_CloseArg (value: CloseArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CloseArg) { _cached_encoder_for_CloseArg = function (value: CloseArg, elGetter: $.ASN1Encoder<CloseArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.userID === undefined) ? undefined : _encode_UserID(value.userID, $.BER)),
            /* IF_ABSENT  */ ((value.bearerCapability === undefined) ? undefined : _encode_BearerCapability(value.bearerCapability, $.BER)),
            /* IF_ABSENT  */ ((value.closeCause === undefined) ? undefined : _encode_CloseCause(value.closeCause, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CloseArg(value, elGetter);
}


/* eslint-enable */
