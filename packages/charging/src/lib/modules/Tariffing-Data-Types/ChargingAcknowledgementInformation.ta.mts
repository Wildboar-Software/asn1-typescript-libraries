/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChargingAcknowledgementInformation_acknowledgementIndicators, _decode_ChargingAcknowledgementInformation_acknowledgementIndicators, _encode_ChargingAcknowledgementInformation_acknowledgementIndicators } from "../Tariffing-Data-Types/ChargingAcknowledgementInformation-acknowledgementIndicators.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Tariffing-Data-Types/ExtensionField.ta.mjs";
import { ChargingReferenceIdentification, _decode_ChargingReferenceIdentification, _encode_ChargingReferenceIdentification } from "../Tariffing-Data-Types/ChargingReferenceIdentification.ta.mjs";
import { numOfExtensions } from "../Tariffing-Data-Types/numOfExtensions.va.mjs";


/**
 * @summary ChargingAcknowledgementInformation
 * @description
 *
 * CRGA. Response or confirmation for CRGT, AOCRG, START, and STOP
 * (table 2). The sender of CRGT or AOCRG starts timer Tcrga
 * (6 s to 15 s) and cancels it on this acknowledgement. A connection
 * control point does the same for START and STOP. While Tcrga runs,
 * another CRGT or AOCRG is not sent. Expiry, a "not accepted"
 * result, or `Charging_Error` makes the exchange release the call
 * or continue it (table 1).
 *
 * The first acknowledgement of a CRGT or AOCRG carries the
 * registration or generation point's origination identifier and the
 * determination point's identifier as the destination, so the two
 * directions can be matched (clause 6.4.1). START and STOP
 * acknowledgements do the same for the connection control point
 * (clause 6.4.2).
 *
 * [ES 201 296 V1.3.1, clauses 6.1.4, 6.3.6, 6.4, and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingAcknowledgementInformation ::= SEQUENCE {
 *     acknowledgementIndicators [0] BIT STRING {
 *         accepted (0) }
 *     (SIZE(minAcknowledgementIndicatorsLen..maxAcknowledgementIndicatorsLen)), extensions [1]
 * SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField OPTIONAL,
 *     originationIdentification [2] ChargingReferenceIdentification,
 *     destinationIdentification [3] ChargingReferenceIdentification
 * }
 * ```
 * 
 * @class
 */
export
class ChargingAcknowledgementInformation {
    constructor (
        /**
         * `accepted` set means the message was accepted. Clear means
         * it was not. See
         * {@link ChargingAcknowledgementInformation_acknowledgementIndicators}.
         * @public
         * @readonly
         */
        readonly acknowledgementIndicators: ChargingAcknowledgementInformation_acknowledgementIndicators,
        /**
         * Network-operator extension. Clause 9 calls this a sequence
         * for possible extensions. This module allows one.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>,
        /**
         * Charging reference assigned by the exchange sending this
         * acknowledgement. For the first CRGT or AOCRG reply this is
         * the registration or generation point. It stays that value
         * for the life of the instance (clause 6.4.1).
         * @public
         * @readonly
         */
        readonly originationIdentification: ChargingReferenceIdentification,
        /**
         * Charging reference of the exchange that sent the request.
         * Equal to that request's origination identifier. Always
         * present, including on the first acknowledgement
         * (clause 6.4).
         * @public
         * @readonly
         */
        readonly destinationIdentification: ChargingReferenceIdentification
    ) {
        if (extensions !== undefined && (extensions.length < 1 || extensions.length > Number(numOfExtensions))) {
            throw new ASN1SizeError("ChargingAcknowledgementInformation.extensions violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ChargingAcknowledgementInformation
     * @description
     * 
     * This takes an `object` and converts it to a `ChargingAcknowledgementInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChargingAcknowledgementInformation`.
     * @returns {ChargingAcknowledgementInformation}
     */
    public static _from_object (_o: { [_K in keyof (ChargingAcknowledgementInformation)]: (ChargingAcknowledgementInformation)[_K] }): ChargingAcknowledgementInformation {
        return new ChargingAcknowledgementInformation(_o.acknowledgementIndicators, _o.extensions, _o.originationIdentification, _o.destinationIdentification);
    }


}

/**
 * @summary The Leading Root Component Types of ChargingAcknowledgementInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChargingAcknowledgementInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("acknowledgementIndicators", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("originationIdentification", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("destinationIdentification", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ChargingAcknowledgementInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChargingAcknowledgementInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChargingAcknowledgementInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChargingAcknowledgementInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChargingAcknowledgementInformation: $.ASN1Decoder<ChargingAcknowledgementInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingAcknowledgementInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingAcknowledgementInformation (el: _Element): ChargingAcknowledgementInformation {
    if (!_cached_decoder_for_ChargingAcknowledgementInformation) { _cached_decoder_for_ChargingAcknowledgementInformation = function (el: _Element): ChargingAcknowledgementInformation {
    let acknowledgementIndicators!: ChargingAcknowledgementInformation_acknowledgementIndicators;
    let extensions: OPTIONAL<ExtensionField[]>;
    let originationIdentification!: ChargingReferenceIdentification;
    let destinationIdentification!: ChargingReferenceIdentification;
    const callbacks: $.DecodingMap = {
        "acknowledgementIndicators": (_el: _Element): void => { acknowledgementIndicators = $._decode_implicit<ChargingAcknowledgementInformation_acknowledgementIndicators>(() => _decode_ChargingAcknowledgementInformation_acknowledgementIndicators)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "originationIdentification": (_el: _Element): void => { originationIdentification = $._decode_implicit<ChargingReferenceIdentification>(() => _decode_ChargingReferenceIdentification)(_el); },
        "destinationIdentification": (_el: _Element): void => { destinationIdentification = $._decode_implicit<ChargingReferenceIdentification>(() => _decode_ChargingReferenceIdentification)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChargingAcknowledgementInformation,
        _extension_additions_list_spec_for_ChargingAcknowledgementInformation,
        _root_component_type_list_2_spec_for_ChargingAcknowledgementInformation,
        undefined,
    );
    return new ChargingAcknowledgementInformation(
        acknowledgementIndicators,
        extensions,
        originationIdentification,
        destinationIdentification
    );
}; }
    return _cached_decoder_for_ChargingAcknowledgementInformation(el);
}

let _cached_encoder_for_ChargingAcknowledgementInformation: $.ASN1Encoder<ChargingAcknowledgementInformation> | null = null;

/**
 * @summary Encodes a(n) ChargingAcknowledgementInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingAcknowledgementInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingAcknowledgementInformation (value: ChargingAcknowledgementInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingAcknowledgementInformation) { _cached_encoder_for_ChargingAcknowledgementInformation = function (value: ChargingAcknowledgementInformation, _elGetter: $.ASN1Encoder<ChargingAcknowledgementInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ChargingAcknowledgementInformation_acknowledgementIndicators, $.BER)(value.acknowledgementIndicators, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ChargingReferenceIdentification, $.BER)(value.originationIdentification, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ChargingReferenceIdentification, $.BER)(value.destinationIdentification, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChargingAcknowledgementInformation(value, elGetter);
}


/* eslint-enable */
