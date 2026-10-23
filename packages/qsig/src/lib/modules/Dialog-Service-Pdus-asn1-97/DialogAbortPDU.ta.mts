/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DestinationDialogId, _decode_DestinationDialogId, _encode_DestinationDialogId } from "../Dialog-Service-Pdus-asn1-97/DestinationDialogId.ta.mjs";
import { DialogAbortPDU_abortChoice, _decode_DialogAbortPDU_abortChoice, _encode_DialogAbortPDU_abortChoice } from "../Dialog-Service-Pdus-asn1-97/DialogAbortPDU-abortChoice.ta.mjs";

/**
 * @summary DialogAbortPDU
 * @description
 *
 * Abandons a dialogue (ECMA-165 §8.4). Sent when the responder cannot accept
 * the dialogue, when the Coordination Function requests an abort, or in the
 * error cases of §8.4.5. The receiver treats the dialogue as aborted and
 * releases both identifiers. An abort received in Idle is discarded. §8.4 does
 * not say whether the abort choice is a provider cause or user information. No
 * ROSE or ACSE APDUs are carried.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DialogAbortPDU ::= SEQUENCE {
 *     destinationDialogId DestinationDialogId,
 *     abortChoice CHOICE {
 *         p-AbortCause P-AbortCause,
 *         userAbortInformation UserAbortInformation
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class DialogAbortPDU {
    /**
     * @summary `destinationDialogId`.
     * @description
     *
     * Identifies the dialogue being aborted. In the §8.4.5 error cases it is
     * set to the origination identifier of the unexpected DialogContinuePDU
     * (ECMA-165 §8.4.5).
     * @public
     * @readonly
     */
    readonly destinationDialogId: DestinationDialogId;
    /**
     * @summary `abortChoice`.
     * @description
     *
     * Provider abort cause or manufacturer-specific user abort information
     * (ECMA-165 §11.3.3.3). Clause 8.4 requires an abort in several cases and
     * does not choose this alternative.
     * @public
     * @readonly
     */
    readonly abortChoice: DialogAbortPDU_abortChoice;

    constructor (
        destinationDialogId: DestinationDialogId,
        abortChoice: DialogAbortPDU_abortChoice
    ) {
        this.destinationDialogId = destinationDialogId;
        this.abortChoice = abortChoice;
    }

    /**
     * @summary Restructures an object into a DialogAbortPDU
     * @description
     * 
     * This takes an `object` and converts it to a `DialogAbortPDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DialogAbortPDU`.
     * @returns {DialogAbortPDU}
     */
    public static _from_object (_o: { [_K in keyof (DialogAbortPDU)]: (DialogAbortPDU)[_K] }): DialogAbortPDU {
        return new DialogAbortPDU(_o.destinationDialogId, _o.abortChoice);
    }

}

/**
 * @summary The Leading Root Component Types of DialogAbortPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DialogAbortPDU: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationDialogId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("abortChoice", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of DialogAbortPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DialogAbortPDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DialogAbortPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DialogAbortPDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DialogAbortPDU: $.ASN1Decoder<DialogAbortPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DialogAbortPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DialogAbortPDU (el: _Element): DialogAbortPDU {
    if (!_cached_decoder_for_DialogAbortPDU) { _cached_decoder_for_DialogAbortPDU = function (el: _Element): DialogAbortPDU {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DialogAbortPDU contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "destinationDialogId";
    sequence[1].name = "abortChoice";
    const destinationDialogId: DestinationDialogId = _decode_DestinationDialogId(sequence[0]);
    const abortChoice: DialogAbortPDU_abortChoice = _decode_DialogAbortPDU_abortChoice(sequence[1]);
    return new DialogAbortPDU(
        destinationDialogId,
        abortChoice,

    );
}; }
    return _cached_decoder_for_DialogAbortPDU(el);
}

let _cached_encoder_for_DialogAbortPDU: $.ASN1Encoder<DialogAbortPDU> | null = null;

/**
 * @summary Encodes a(n) DialogAbortPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DialogAbortPDU, encoded as an ASN.1 Element.
 */
export
function _encode_DialogAbortPDU (value: DialogAbortPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DialogAbortPDU) { _cached_encoder_for_DialogAbortPDU = function (value: DialogAbortPDU, _elGetter: $.ASN1Encoder<DialogAbortPDU>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DestinationDialogId, $.BER)(value.destinationDialogId, $.BER),
        /* REQUIRED   */ _encode_DialogAbortPDU_abortChoice(value.abortChoice, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_DialogAbortPDU(value, elGetter);
}

/* eslint-enable */
