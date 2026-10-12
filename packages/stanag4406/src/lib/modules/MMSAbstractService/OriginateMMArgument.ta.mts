/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

import {
    MessageSubmissionEnvelope,
    _decode_MessageSubmissionEnvelope,
    _encode_MessageSubmissionEnvelope,
} from "@wildboar/x400/MTSAbstractService";
import { MM, _decode_MM, _encode_MM } from "../MMSInformationObjects/MM.ta.mjs";


/**
 * @summary OriginateMMArgument
 * @description
 * 
 * Argument of originate-MM, on the origination port. Submits one military
 * message. Distribution-list expansion is done by the MTS. Address-list
 * expansion, reduced by the exempted-address list, is recommended at the
 * originating domain when there is no mail list agent; only address lists
 * support exempted addresses. Probes are a different operation and are
 * prohibited across national boundaries. STANAG 4406 (Ed. 2), Annex A, clauses
 * 12.1.2 and 18.2.2, and Annex G.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginateMMArgument ::= SET {
 *   envelope  [0]  MessageSubmissionEnvelope,
 *   content   [1]  MM}
 * ```
 * 
 * @class
 */
export
class OriginateMMArgument {
    /**
     * @summary `envelope`.
     * @description
     *
     * MTS submission envelope. Primary precedence is mapped onto its grade of
     * delivery, and onto the priority-level qualifier when that option is
     * selected. STANAG 4406 (Ed. 2), Annex A, clause 22.4 and Annex G.
     * @public
     * @readonly
     */
    readonly envelope: MessageSubmissionEnvelope;
    /**
     * @summary `content`.
     * @description
     *
     * The military message being submitted. STANAG 4406 (Ed. 2), Annex A, Annex
     * G.
     * @public
     * @readonly
     */
    readonly content: MM;

    constructor (
        envelope: MessageSubmissionEnvelope,
        content: MM
    ) {
        this.envelope = envelope;
        this.content = content;
    }

    /**
     * @summary Restructures an object into a OriginateMMArgument
     * @description
     * 
     * This takes an `object` and converts it to a `OriginateMMArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OriginateMMArgument`.
     * @returns {OriginateMMArgument}
     */
    public static _from_object (_o: { [_K in keyof (OriginateMMArgument)]: (OriginateMMArgument)[_K] }): OriginateMMArgument {
        return new OriginateMMArgument(_o.envelope, _o.content);
    }


}

/**
 * @summary The Leading Root Component Types of OriginateMMArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OriginateMMArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("envelope", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of OriginateMMArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OriginateMMArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OriginateMMArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OriginateMMArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OriginateMMArgument: $.ASN1Decoder<OriginateMMArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginateMMArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginateMMArgument (el: _Element): OriginateMMArgument {
    if (!_cached_decoder_for_OriginateMMArgument) { _cached_decoder_for_OriginateMMArgument = function (el: _Element): OriginateMMArgument {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let envelope!: MessageSubmissionEnvelope;
    let content!: MM;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "envelope": (_el: _Element): void => { envelope = $._decode_implicit<MessageSubmissionEnvelope>(() => _decode_MessageSubmissionEnvelope)(_el); },
        "content": (_el: _Element): void => { content = $._decode_implicit<MM>(() => _decode_MM)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OriginateMMArgument,
        _extension_additions_list_spec_for_OriginateMMArgument,
        _root_component_type_list_2_spec_for_OriginateMMArgument,
        undefined,
    );
    return new OriginateMMArgument( /* SET_CONSTRUCTOR_CALL */
        envelope,
        content
    );
}; }
    return _cached_decoder_for_OriginateMMArgument(el);
}

let _cached_encoder_for_OriginateMMArgument: $.ASN1Encoder<OriginateMMArgument> | null = null;

/**
 * @summary Encodes a(n) OriginateMMArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginateMMArgument, encoded as an ASN.1 Element.
 */
export
function _encode_OriginateMMArgument (value: OriginateMMArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginateMMArgument) { _cached_encoder_for_OriginateMMArgument = function (value: OriginateMMArgument): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MessageSubmissionEnvelope, $.BER)(value.envelope, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MM, $.BER)(value.content, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_OriginateMMArgument(value, elGetter);
}


/* eslint-enable */
