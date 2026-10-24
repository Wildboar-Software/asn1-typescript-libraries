/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OriginationDialogId, _decode_OriginationDialogId, _encode_OriginationDialogId } from "../Dialog-Service-Pdus-asn1-97/OriginationDialogId.ta.mjs";
import { type DestinationDialogId, _decode_DestinationDialogId, _encode_DestinationDialogId } from "../Dialog-Service-Pdus-asn1-97/DestinationDialogId.ta.mjs";
import { type RemoteOperationsPortion, _decode_RemoteOperationsPortion, _encode_RemoteOperationsPortion } from "../Dialog-Service-Pdus-asn1-97/RemoteOperationsPortion.ta.mjs";

/**
 * @summary DialogContinuePDU
 * @description
 *
 * Continues a dialogue (ECMA-165 §8.4). The PINX that received DialogBegin
 * sends the first continue, carrying its own new origination identifier and the
 * initiator's identifier as the destination. Each later continue carries the
 * sender's identifier and the peer's identifier (§8.4.3, §8.4.6). A continue in
 * Idle, or an active continue whose origination identifier is unrecognised, is
 * answered with DialogAbort (§8.4.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DialogContinuePDU ::= SEQUENCE {
 *     originationDialogId OriginationDialogId,
 *     destinationDialogId DestinationDialogId,
 *     remoteOperationsPortion RemoteOperationsPortion OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DialogContinuePDU {
    /**
     * @summary `originationDialogId`.
     * @description
     *
     * Dialogue identifier selected by the sender of this PDU. The peer stores
     * it and returns it as `destinationDialogId` (ECMA-165 §8.4.1.2, §8.4.2.2,
     * §8.4.6).
     * @public
     * @readonly
     */
    readonly originationDialogId: OriginationDialogId;
    /**
     * @summary `destinationDialogId`.
     * @description
     *
     * The peer's dialogue identifier: the origination identifier previously
     * received from that peer (ECMA-165 §8.4.6).
     * @public
     * @readonly
     */
    readonly destinationDialogId: DestinationDialogId;
    /**
     * @summary `remoteOperationsPortion`.
     * @description
     *
     * Optional ROSE or ACSE APDUs belonging to this dialogue (ECMA-165 §8.4). A
     * DialogAbortPDU does not carry this element. §8.4 says one or more ROSE
     * APDUs or one or more ACSE APDUs; it does not discuss mixing the two in
     * one portion.
     * @public
     * @readonly
     */
    readonly remoteOperationsPortion: OPTIONAL<RemoteOperationsPortion>;

    constructor (
        originationDialogId: OriginationDialogId,
        destinationDialogId: DestinationDialogId,
        remoteOperationsPortion?: OPTIONAL<RemoteOperationsPortion>
    ) {
        this.originationDialogId = originationDialogId;
        this.destinationDialogId = destinationDialogId;
        this.remoteOperationsPortion = remoteOperationsPortion;
    }

    /**
     * @summary Restructures an object into a DialogContinuePDU
     * @description
     * 
     * This takes an `object` and converts it to a `DialogContinuePDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DialogContinuePDU`.
     * @returns {DialogContinuePDU}
     */
    public static _from_object (_o: { [_K in keyof (DialogContinuePDU)]: (DialogContinuePDU)[_K] }): DialogContinuePDU {
        return new DialogContinuePDU(_o.originationDialogId, _o.destinationDialogId, _o.remoteOperationsPortion);
    }

}

/**
 * @summary The Leading Root Component Types of DialogContinuePDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DialogContinuePDU: $.ComponentSpec[] = [
    new $.ComponentSpec("originationDialogId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("destinationDialogId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("remoteOperationsPortion", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of DialogContinuePDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DialogContinuePDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DialogContinuePDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DialogContinuePDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DialogContinuePDU: $.ASN1Decoder<DialogContinuePDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DialogContinuePDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DialogContinuePDU (el: _Element): DialogContinuePDU {
    if (!_cached_decoder_for_DialogContinuePDU) { _cached_decoder_for_DialogContinuePDU = function (el: _Element): DialogContinuePDU {
    let originationDialogId!: OriginationDialogId;
    let destinationDialogId!: DestinationDialogId;
    let remoteOperationsPortion: OPTIONAL<RemoteOperationsPortion>;
    const callbacks: $.DecodingMap = {
        "originationDialogId": (_el: _Element): void => { originationDialogId = _decode_OriginationDialogId(_el); },
        "destinationDialogId": (_el: _Element): void => { destinationDialogId = _decode_DestinationDialogId(_el); },
        "remoteOperationsPortion": (_el: _Element): void => { remoteOperationsPortion = _decode_RemoteOperationsPortion(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DialogContinuePDU,
        _extension_additions_list_spec_for_DialogContinuePDU,
        _root_component_type_list_2_spec_for_DialogContinuePDU,
        undefined,
    );
    return new DialogContinuePDU(
        originationDialogId,
        destinationDialogId,
        remoteOperationsPortion
    );
}; }
    return _cached_decoder_for_DialogContinuePDU(el);
}

let _cached_encoder_for_DialogContinuePDU: $.ASN1Encoder<DialogContinuePDU> | null = null;

/**
 * @summary Encodes a(n) DialogContinuePDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DialogContinuePDU, encoded as an ASN.1 Element.
 */
export
function _encode_DialogContinuePDU (value: DialogContinuePDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DialogContinuePDU) { _cached_encoder_for_DialogContinuePDU = function (value: DialogContinuePDU, _elGetter: $.ASN1Encoder<DialogContinuePDU>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_OriginationDialogId, $.BER)(value.originationDialogId, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DestinationDialogId, $.BER)(value.destinationDialogId, $.BER));
    if (value.remoteOperationsPortion !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_RemoteOperationsPortion, $.BER)(value.remoteOperationsPortion, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DialogContinuePDU(value, elGetter);
}

/* eslint-enable */
