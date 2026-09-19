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
import { TriggerCriteriaFlag, _decode_TriggerCriteriaFlag, _encode_TriggerCriteriaFlag } from "../AIN-Parameters/TriggerCriteriaFlag.ta.mjs";
// export { TriggerCriteriaFlag, _decode_TriggerCriteriaFlag, _encode_TriggerCriteriaFlag } from "../AIN-Parameters/TriggerCriteriaFlag.ta.mjs";
import { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
import { ControlEncountered, _decode_ControlEncountered, _encode_ControlEncountered } from "../AIN-Parameters/ControlEncountered.ta.mjs";
// export { ControlEncountered, _decode_ControlEncountered, _encode_ControlEncountered } from "../AIN-Parameters/ControlEncountered.ta.mjs";


/**
 * @summary UpdateRequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateRequestArg ::= SEQUENCE{
 *         userID                        UserID,
 *         triggerCriteriaFlag           TriggerCriteriaFlag OPTIONAL,
 *         bearerCapability              BearerCapability OPTIONAL,
 *         controlEncountered            ControlEncountered OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class UpdateRequestArg {
    constructor (
        /**
         * @summary `userID`.
         * @public
         * @readonly
         */
        readonly userID: UserID,
        /**
         * @summary `triggerCriteriaFlag`.
         * @public
         * @readonly
         */
        readonly triggerCriteriaFlag: OPTIONAL<TriggerCriteriaFlag>,
        /**
         * @summary `bearerCapability`.
         * @public
         * @readonly
         */
        readonly bearerCapability: OPTIONAL<BearerCapability>,
        /**
         * @summary `controlEncountered`.
         * @public
         * @readonly
         */
        readonly controlEncountered: OPTIONAL<ControlEncountered>
    ) {}

    /**
     * @summary Restructures an object into a UpdateRequestArg
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateRequestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateRequestArg`.
     * @returns {UpdateRequestArg}
     */
    public static _from_object (_o: { [_K in keyof (UpdateRequestArg)]: (UpdateRequestArg)[_K] }): UpdateRequestArg {
        return new UpdateRequestArg(_o.userID, _o.triggerCriteriaFlag, _o.bearerCapability, _o.controlEncountered);
    }


}

/**
 * @summary The Leading Root Component Types of UpdateRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateRequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("userID", false, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("triggerCriteriaFlag", true, $.hasTag(_TagClass.context, 68)),
    new $.ComponentSpec("bearerCapability", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("controlEncountered", true, $.hasTag(_TagClass.context, 127))
];

/**
 * @summary The Trailing Root Component Types of UpdateRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateRequestArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateRequestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UpdateRequestArg: $.ASN1Decoder<UpdateRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateRequestArg (el: _Element): UpdateRequestArg {
    if (!_cached_decoder_for_UpdateRequestArg) { _cached_decoder_for_UpdateRequestArg = function (el: _Element): UpdateRequestArg {
    let userID!: UserID;
    let triggerCriteriaFlag: OPTIONAL<TriggerCriteriaFlag>;
    let bearerCapability: OPTIONAL<BearerCapability>;
    let controlEncountered: OPTIONAL<ControlEncountered>;
    const callbacks: $.DecodingMap = {
        "userID": (_el: _Element): void => { userID = _decode_UserID(_el); },
        "triggerCriteriaFlag": (_el: _Element): void => { triggerCriteriaFlag = _decode_TriggerCriteriaFlag(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = _decode_BearerCapability(_el); },
        "controlEncountered": (_el: _Element): void => { controlEncountered = _decode_ControlEncountered(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UpdateRequestArg,
        _extension_additions_list_spec_for_UpdateRequestArg,
        _root_component_type_list_2_spec_for_UpdateRequestArg,
        undefined,
    );
    return new UpdateRequestArg(
        userID,
        triggerCriteriaFlag,
        bearerCapability,
        controlEncountered
    );
}; }
    return _cached_decoder_for_UpdateRequestArg(el);
}

let _cached_encoder_for_UpdateRequestArg: $.ASN1Encoder<UpdateRequestArg> | null = null;

/**
 * @summary Encodes a(n) UpdateRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateRequestArg (value: UpdateRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateRequestArg) { _cached_encoder_for_UpdateRequestArg = function (value: UpdateRequestArg, elGetter: $.ASN1Encoder<UpdateRequestArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_UserID(value.userID, $.BER),
            /* IF_ABSENT  */ ((value.triggerCriteriaFlag === undefined) ? undefined : _encode_TriggerCriteriaFlag(value.triggerCriteriaFlag, $.BER)),
            /* IF_ABSENT  */ ((value.bearerCapability === undefined) ? undefined : _encode_BearerCapability(value.bearerCapability, $.BER)),
            /* IF_ABSENT  */ ((value.controlEncountered === undefined) ? undefined : _encode_ControlEncountered(value.controlEncountered, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UpdateRequestArg(value, elGetter);
}


/* eslint-enable */
