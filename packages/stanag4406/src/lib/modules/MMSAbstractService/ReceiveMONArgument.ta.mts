/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

import {
    MessageDeliveryEnvelope,
    _decode_MessageDeliveryEnvelope,
    _encode_MessageDeliveryEnvelope,
} from "@wildboar/x400/MTSAbstractService";
import { type MON, _decode_MON, _encode_MON } from "../MMSInformationObjects/MON.ta.mjs";


/**
 * @summary ReceiveMONArgument
 * @description
 * 
 * Argument of receive-MON. Delivers a military other notification, including an
 * ACP 127 notification response. The operation has no result. STANAG 4406 (Ed.
 * 2), Annex A, Annex G and clause 8.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceiveMONArgument ::= SET {
 *   envelope  [0]  MessageDeliveryEnvelope,
 *   content   [1]  MON}
 * ```
 * 
 * @class
 */
export
class ReceiveMONArgument {
    /**
     * @summary `envelope`.
     * @description
     *
     * MTS delivery envelope of the other notification. STANAG 4406 (Ed. 2),
     * Annex A, Annex G.
     * @public
     * @readonly
     */
    readonly envelope: MessageDeliveryEnvelope;
    /**
     * @summary `content`.
     * @description
     *
     * The delivered other notification, for example an ACP 127 gateway result.
     * STANAG 4406 (Ed. 2), Annex A, Annex G and clause 8.4.
     * @public
     * @readonly
     */
    readonly content: MON;

    constructor (
        envelope: MessageDeliveryEnvelope,
        content: MON
    ) {
        this.envelope = envelope;
        this.content = content;
    }

    /**
     * @summary Restructures an object into a ReceiveMONArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ReceiveMONArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReceiveMONArgument`.
     * @returns {ReceiveMONArgument}
     */
    public static _from_object (_o: { [_K in keyof (ReceiveMONArgument)]: (ReceiveMONArgument)[_K] }): ReceiveMONArgument {
        return new ReceiveMONArgument(_o.envelope, _o.content);
    }


}

/**
 * @summary The Leading Root Component Types of ReceiveMONArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReceiveMONArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("envelope", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ReceiveMONArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReceiveMONArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReceiveMONArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReceiveMONArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReceiveMONArgument: $.ASN1Decoder<ReceiveMONArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReceiveMONArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReceiveMONArgument (el: _Element): ReceiveMONArgument {
    if (!_cached_decoder_for_ReceiveMONArgument) { _cached_decoder_for_ReceiveMONArgument = function (el: _Element): ReceiveMONArgument {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let envelope!: MessageDeliveryEnvelope;
    let content!: MON;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "envelope": (_el: _Element): void => { envelope = $._decode_implicit<MessageDeliveryEnvelope>(() => _decode_MessageDeliveryEnvelope)(_el); },
        "content": (_el: _Element): void => { content = $._decode_implicit<MON>(() => _decode_MON)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ReceiveMONArgument,
        _extension_additions_list_spec_for_ReceiveMONArgument,
        _root_component_type_list_2_spec_for_ReceiveMONArgument,
        undefined,
    );
    return new ReceiveMONArgument( /* SET_CONSTRUCTOR_CALL */
        envelope,
        content
    );
}; }
    return _cached_decoder_for_ReceiveMONArgument(el);
}

let _cached_encoder_for_ReceiveMONArgument: $.ASN1Encoder<ReceiveMONArgument> | null = null;

/**
 * @summary Encodes a(n) ReceiveMONArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceiveMONArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ReceiveMONArgument (value: ReceiveMONArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReceiveMONArgument) { _cached_encoder_for_ReceiveMONArgument = function (value: ReceiveMONArgument): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MessageDeliveryEnvelope, $.BER)(value.envelope, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MON, $.BER)(value.content, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ReceiveMONArgument(value, elGetter);
}


/* eslint-enable */
