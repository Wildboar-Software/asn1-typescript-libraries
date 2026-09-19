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
import { SSPUserResourceID, _decode_SSPUserResourceID, _encode_SSPUserResourceID } from "../AIN-Parameters/SSPUserResourceID.ta.mjs";
// export { SSPUserResourceID, _decode_SSPUserResourceID, _encode_SSPUserResourceID } from "../AIN-Parameters/SSPUserResourceID.ta.mjs";
import { ServiceProviderID, _decode_ServiceProviderID, _encode_ServiceProviderID } from "../AIN-Parameters/ServiceProviderID.ta.mjs";
// export { ServiceProviderID, _decode_ServiceProviderID, _encode_ServiceProviderID } from "../AIN-Parameters/ServiceProviderID.ta.mjs";
import { UpdateGroups, _decode_UpdateGroups, _encode_UpdateGroups } from "../AIN-Parameters/UpdateGroups.ta.mjs";
// export { UpdateGroups, _decode_UpdateGroups, _encode_UpdateGroups } from "../AIN-Parameters/UpdateGroups.ta.mjs";
import { ONoAnswerTimer, _decode_ONoAnswerTimer, _encode_ONoAnswerTimer } from "../AIN-Parameters/ONoAnswerTimer.ta.mjs";
// export { ONoAnswerTimer, _decode_ONoAnswerTimer, _encode_ONoAnswerTimer } from "../AIN-Parameters/ONoAnswerTimer.ta.mjs";
import { TNoAnswerTimer, _decode_TNoAnswerTimer, _encode_TNoAnswerTimer } from "../AIN-Parameters/TNoAnswerTimer.ta.mjs";
// export { TNoAnswerTimer, _decode_TNoAnswerTimer, _encode_TNoAnswerTimer } from "../AIN-Parameters/TNoAnswerTimer.ta.mjs";
import { DisplayText, _decode_DisplayText, _encode_DisplayText } from "../AIN-Parameters/DisplayText.ta.mjs";
// export { DisplayText, _decode_DisplayText, _encode_DisplayText } from "../AIN-Parameters/DisplayText.ta.mjs";
import { DPConverter, _decode_DPConverter, _encode_DPConverter } from "../AIN-Parameters/DPConverter.ta.mjs";
// export { DPConverter, _decode_DPConverter, _encode_DPConverter } from "../AIN-Parameters/DPConverter.ta.mjs";
import { CancelInterdigitTimer, _decode_CancelInterdigitTimer, _encode_CancelInterdigitTimer } from "../AIN-Parameters/CancelInterdigitTimer.ta.mjs";
// export { CancelInterdigitTimer, _decode_CancelInterdigitTimer, _encode_CancelInterdigitTimer } from "../AIN-Parameters/CancelInterdigitTimer.ta.mjs";


/**
 * @summary SSPUserResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSPUserResource ::= [103] IMPLICIT SEQUENCE{
 *         sSPUserResourceID   [1] SSPUserResourceID, --see Section 6.4.1 for encoding
 *         serviceProviderID       ServiceProviderID OPTIONAL,
 *         updateGroups            UpdateGroups OPTIONAL,
 *         oNoAnswerTimer          ONoAnswerTimer OPTIONAL,
 *         tNoAnswerTimer          TNoAnswerTimer OPTIONAL,
 *         displayText             DisplayText OPTIONAL,
 *         dPConverter             DPConverter OPTIONAL,
 *         cancelInterdigitTimer   CancelInterdigitTimer OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class SSPUserResource {
    constructor (
        /**
         * @summary `sSPUserResourceID`.
         * @public
         * @readonly
         */
        readonly sSPUserResourceID: SSPUserResourceID,
        /**
         * @summary `serviceProviderID`.
         * @public
         * @readonly
         */
        readonly serviceProviderID: OPTIONAL<ServiceProviderID>,
        /**
         * @summary `updateGroups`.
         * @public
         * @readonly
         */
        readonly updateGroups: OPTIONAL<UpdateGroups>,
        /**
         * @summary `oNoAnswerTimer`.
         * @public
         * @readonly
         */
        readonly oNoAnswerTimer: OPTIONAL<ONoAnswerTimer>,
        /**
         * @summary `tNoAnswerTimer`.
         * @public
         * @readonly
         */
        readonly tNoAnswerTimer: OPTIONAL<TNoAnswerTimer>,
        /**
         * @summary `displayText`.
         * @public
         * @readonly
         */
        readonly displayText: OPTIONAL<DisplayText>,
        /**
         * @summary `dPConverter`.
         * @public
         * @readonly
         */
        readonly dPConverter: OPTIONAL<DPConverter>,
        /**
         * @summary `cancelInterdigitTimer`.
         * @public
         * @readonly
         */
        readonly cancelInterdigitTimer: OPTIONAL<CancelInterdigitTimer>
    ) {}

    /**
     * @summary Restructures an object into a SSPUserResource
     * @description
     * 
     * This takes an `object` and converts it to a `SSPUserResource`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SSPUserResource`.
     * @returns {SSPUserResource}
     */
    public static _from_object (_o: { [_K in keyof (SSPUserResource)]: (SSPUserResource)[_K] }): SSPUserResource {
        return new SSPUserResource(_o.sSPUserResourceID, _o.serviceProviderID, _o.updateGroups, _o.oNoAnswerTimer, _o.tNoAnswerTimer, _o.displayText, _o.dPConverter, _o.cancelInterdigitTimer);
    }

        /**
         * @summary The enum used as the type of the component `cancelInterdigitTimer`
         * @public
         * @static
         */

    public static _enum_for_cancelInterdigitTimer = _enum_for_ActivationStateCode;
}

/**
 * @summary The Leading Root Component Types of SSPUserResource
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SSPUserResource: $.ComponentSpec[] = [
    new $.ComponentSpec("sSPUserResourceID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceProviderID", true, $.or($.hasTag(_TagClass.context, 87), $.hasTag(_TagClass.context, 106))),
    new $.ComponentSpec("updateGroups", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5), $.hasTag(_TagClass.context, 6), $.hasTag(_TagClass.context, 7), $.hasTag(_TagClass.context, 8), $.hasTag(_TagClass.context, 9), $.hasTag(_TagClass.context, 10))),
    new $.ComponentSpec("oNoAnswerTimer", true, $.hasTag(_TagClass.context, 91)),
    new $.ComponentSpec("tNoAnswerTimer", true, $.hasTag(_TagClass.context, 99)),
    new $.ComponentSpec("displayText", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("dPConverter", true, $.hasTag(_TagClass.context, 76)),
    new $.ComponentSpec("cancelInterdigitTimer", true, $.hasTag(_TagClass.universal, 10))
];

/**
 * @summary The Trailing Root Component Types of SSPUserResource
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SSPUserResource: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SSPUserResource
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SSPUserResource: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SSPUserResource: $.ASN1Decoder<SSPUserResource> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SSPUserResource
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SSPUserResource (el: _Element): SSPUserResource {
    if (!_cached_decoder_for_SSPUserResource) { _cached_decoder_for_SSPUserResource = $._decode_implicit<SSPUserResource>(() => function (el: _Element): SSPUserResource {
    let sSPUserResourceID!: SSPUserResourceID;
    let serviceProviderID: OPTIONAL<ServiceProviderID>;
    let updateGroups: OPTIONAL<UpdateGroups>;
    let oNoAnswerTimer: OPTIONAL<ONoAnswerTimer>;
    let tNoAnswerTimer: OPTIONAL<TNoAnswerTimer>;
    let displayText: OPTIONAL<DisplayText>;
    let dPConverter: OPTIONAL<DPConverter>;
    let cancelInterdigitTimer: OPTIONAL<CancelInterdigitTimer>;
    const callbacks: $.DecodingMap = {
        "sSPUserResourceID": (_el: _Element): void => { sSPUserResourceID = $._decode_explicit<SSPUserResourceID>(() => _decode_SSPUserResourceID)(_el); },
        "serviceProviderID": (_el: _Element): void => { serviceProviderID = _decode_ServiceProviderID(_el); },
        "updateGroups": (_el: _Element): void => { updateGroups = _decode_UpdateGroups(_el); },
        "oNoAnswerTimer": (_el: _Element): void => { oNoAnswerTimer = _decode_ONoAnswerTimer(_el); },
        "tNoAnswerTimer": (_el: _Element): void => { tNoAnswerTimer = _decode_TNoAnswerTimer(_el); },
        "displayText": (_el: _Element): void => { displayText = _decode_DisplayText(_el); },
        "dPConverter": (_el: _Element): void => { dPConverter = _decode_DPConverter(_el); },
        "cancelInterdigitTimer": (_el: _Element): void => { cancelInterdigitTimer = _decode_CancelInterdigitTimer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SSPUserResource,
        _extension_additions_list_spec_for_SSPUserResource,
        _root_component_type_list_2_spec_for_SSPUserResource,
        undefined,
    );
    return new SSPUserResource(
        sSPUserResourceID,
        serviceProviderID,
        updateGroups,
        oNoAnswerTimer,
        tNoAnswerTimer,
        displayText,
        dPConverter,
        cancelInterdigitTimer
    );
}); }
    return _cached_decoder_for_SSPUserResource(el);
}

let _cached_encoder_for_SSPUserResource: $.ASN1Encoder<SSPUserResource> | null = null;

/**
 * @summary Encodes a(n) SSPUserResource into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SSPUserResource, encoded as an ASN.1 Element.
 */
export
function _encode_SSPUserResource (value: SSPUserResource, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SSPUserResource) { _cached_encoder_for_SSPUserResource = $._encode_implicit(_TagClass.context, 103, () => function (value: SSPUserResource, elGetter: $.ASN1Encoder<SSPUserResource>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SSPUserResourceID, $.BER)(value.sSPUserResourceID, $.BER),
            /* IF_ABSENT  */ ((value.serviceProviderID === undefined) ? undefined : _encode_ServiceProviderID(value.serviceProviderID, $.BER)),
            /* IF_ABSENT  */ ((value.updateGroups === undefined) ? undefined : _encode_UpdateGroups(value.updateGroups, $.BER)),
            /* IF_ABSENT  */ ((value.oNoAnswerTimer === undefined) ? undefined : _encode_ONoAnswerTimer(value.oNoAnswerTimer, $.BER)),
            /* IF_ABSENT  */ ((value.tNoAnswerTimer === undefined) ? undefined : _encode_TNoAnswerTimer(value.tNoAnswerTimer, $.BER)),
            /* IF_ABSENT  */ ((value.displayText === undefined) ? undefined : _encode_DisplayText(value.displayText, $.BER)),
            /* IF_ABSENT  */ ((value.dPConverter === undefined) ? undefined : _encode_DPConverter(value.dPConverter, $.BER)),
            /* IF_ABSENT  */ ((value.cancelInterdigitTimer === undefined) ? undefined : _encode_CancelInterdigitTimer(value.cancelInterdigitTimer, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_SSPUserResource(value, elGetter);
}


/* eslint-enable */
