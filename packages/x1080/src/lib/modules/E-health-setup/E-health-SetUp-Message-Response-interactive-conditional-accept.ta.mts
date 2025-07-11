/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
import { type CR_SEQUENCE } from "../E-health-command-response/CR-SEQUENCE.oca.mjs";

/**
 * @summary E_health_SetUp_Message_Response_interactive_conditional_accept
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * E-health-SetUp-Message-Response-interactive-conditional-accept ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export
class E_health_SetUp_Message_Response_interactive_conditional_accept {
    constructor (
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: OBJECT_IDENTIFIER,
        /**
         * @summary `reduced_requirements`.
         * @public
         * @readonly
         */
        readonly reduced_requirements: CR_SEQUENCE["&requirements"],
        /**
         * @summary `voice_options`.
         * @public
         * @readonly
         */
        readonly voice_options: OBJECT_IDENTIFIER,
        /**
         * @summary `video_options`.
         * @public
         * @readonly
         */
        readonly video_options: OBJECT_IDENTIFIER
    ) {}

    /**
     * @summary Restructures an object into a E_health_SetUp_Message_Response_interactive_conditional_accept
     * @description
     *
     * This takes an `object` and converts it to a `E_health_SetUp_Message_Response_interactive_conditional_accept`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `E_health_SetUp_Message_Response_interactive_conditional_accept`.
     * @returns {E_health_SetUp_Message_Response_interactive_conditional_accept}
     */
    public static _from_object (_o: { [_K in keyof (E_health_SetUp_Message_Response_interactive_conditional_accept)]: (E_health_SetUp_Message_Response_interactive_conditional_accept)[_K] }): E_health_SetUp_Message_Response_interactive_conditional_accept {
        return new E_health_SetUp_Message_Response_interactive_conditional_accept(_o.id, _o.reduced_requirements, _o.voice_options, _o.video_options);
    }


}


/**
 * @summary The Leading Root Component Types of E_health_SetUp_Message_Response_interactive_conditional_accept
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_E_health_SetUp_Message_Response_interactive_conditional_accept: $.ComponentSpec[] = [
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("reduced-requirements", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("voice-options", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("video-options", false, $.hasTag(_TagClass.context, 3))
];


/**
 * @summary The Trailing Root Component Types of E_health_SetUp_Message_Response_interactive_conditional_accept
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_E_health_SetUp_Message_Response_interactive_conditional_accept: $.ComponentSpec[] = [

];


/**
 * @summary The Extension Addition Component Types of E_health_SetUp_Message_Response_interactive_conditional_accept
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_E_health_SetUp_Message_Response_interactive_conditional_accept: $.ComponentSpec[] = [

];


let _cached_decoder_for_E_health_SetUp_Message_Response_interactive_conditional_accept: $.ASN1Decoder<E_health_SetUp_Message_Response_interactive_conditional_accept> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) E_health_SetUp_Message_Response_interactive_conditional_accept
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {E_health_SetUp_Message_Response_interactive_conditional_accept} The decoded data structure.
 */
export
function _decode_E_health_SetUp_Message_Response_interactive_conditional_accept (el: _Element): E_health_SetUp_Message_Response_interactive_conditional_accept {
    if (!_cached_decoder_for_E_health_SetUp_Message_Response_interactive_conditional_accept) { _cached_decoder_for_E_health_SetUp_Message_Response_interactive_conditional_accept = function (el: _Element): E_health_SetUp_Message_Response_interactive_conditional_accept {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("E-health-SetUp-Message-Response-interactive-conditional-accept contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "id";
    sequence[1].name = "reduced-requirements";
    sequence[2].name = "voice-options";
    sequence[3].name = "video-options";
    let id!: OBJECT_IDENTIFIER;
    let reduced_requirements!: CR_SEQUENCE["&requirements"];
    let voice_options!: OBJECT_IDENTIFIER;
    let video_options!: OBJECT_IDENTIFIER;
    id = $._decodeObjectIdentifier(sequence[0]);
    reduced_requirements = $._decodeEnumerated(sequence[1]);
    voice_options = $._decodeObjectIdentifier(sequence[2]);
    video_options = $._decodeObjectIdentifier(sequence[3]);
    return new E_health_SetUp_Message_Response_interactive_conditional_accept(
        id,
        reduced_requirements,
        voice_options,
        video_options,
    );
}; }
    return _cached_decoder_for_E_health_SetUp_Message_Response_interactive_conditional_accept(el);
}


let _cached_encoder_for_E_health_SetUp_Message_Response_interactive_conditional_accept: $.ASN1Encoder<E_health_SetUp_Message_Response_interactive_conditional_accept> | null = null;


/**
 * @summary Encodes a(n) E_health_SetUp_Message_Response_interactive_conditional_accept into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_health_SetUp_Message_Response_interactive_conditional_accept, encoded as an ASN.1 Element.
 */
export
function _encode_E_health_SetUp_Message_Response_interactive_conditional_accept (value: E_health_SetUp_Message_Response_interactive_conditional_accept, elGetter: $.ASN1Encoder<E_health_SetUp_Message_Response_interactive_conditional_accept>): _Element {
    if (!_cached_encoder_for_E_health_SetUp_Message_Response_interactive_conditional_accept) { _cached_encoder_for_E_health_SetUp_Message_Response_interactive_conditional_accept = function (value: E_health_SetUp_Message_Response_interactive_conditional_accept): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(
                _TagClass.context,
                0,
                () => $._encodeObjectIdentifier,
                $.BER
            )(value.id, $.BER),
            /* REQUIRED   */ $._encode_implicit(
                _TagClass.context,
                1,
                () => $._encodeEnumerated,
                $.BER
            )(value.reduced_requirements, $.BER),
            /* REQUIRED   */ $._encode_implicit(
                _TagClass.context,
                2,
                () => $._encodeObjectIdentifier,
                $.BER
            )(value.voice_options, $.BER),
            /* REQUIRED   */ $._encode_implicit(
                _TagClass.context,
                3,
                () => $._encodeObjectIdentifier,
                $.BER
            )(value.video_options, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_E_health_SetUp_Message_Response_interactive_conditional_accept(value, elGetter);
}


/* eslint-enable */
