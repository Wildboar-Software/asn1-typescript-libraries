/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DestinationDialogId, _decode_DestinationDialogId, _encode_DestinationDialogId } from "../Dialog-Service-Pdus-asn1-97/DestinationDialogId.ta.mjs";
import { RemoteOperationsPortion, _decode_RemoteOperationsPortion, _encode_RemoteOperationsPortion } from "../Dialog-Service-Pdus-asn1-97/RemoteOperationsPortion.ta.mjs";

/**
 * @summary DialogEndPDU
 * @description
 *
 * Terminates a dialogue (ECMA-165 §8.4). Either PINX may send it when the
 * Coordination Function requests termination, or the responder may send it
 * instead of accepting the dialogue (§8.4.2.2). The receiver releases both
 * dialogue identifiers and returns to Idle. An end received in Idle is
 * discarded (§8.4.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DialogEndPDU ::= SEQUENCE {
 *     destinationDialogId DestinationDialogId,
 *     remoteOperationsPortion RemoteOperationsPortion OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DialogEndPDU {
    /**
     * @summary `destinationDialogId`.
     * @description
     *
     * The peer's dialogue identifier. DialogEnd carries no origination
     * identifier (ECMA-165 §6.6 Table 1, §8.4).
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
        destinationDialogId: DestinationDialogId,
        remoteOperationsPortion?: OPTIONAL<RemoteOperationsPortion>
    ) {
        this.destinationDialogId = destinationDialogId;
        this.remoteOperationsPortion = remoteOperationsPortion;
    }

    /**
     * @summary Restructures an object into a DialogEndPDU
     * @description
     * 
     * This takes an `object` and converts it to a `DialogEndPDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DialogEndPDU`.
     * @returns {DialogEndPDU}
     */
    public static _from_object (_o: { [_K in keyof (DialogEndPDU)]: (DialogEndPDU)[_K] }): DialogEndPDU {
        return new DialogEndPDU(_o.destinationDialogId, _o.remoteOperationsPortion);
    }

}

/**
 * @summary The Leading Root Component Types of DialogEndPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DialogEndPDU: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationDialogId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("remoteOperationsPortion", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of DialogEndPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DialogEndPDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DialogEndPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DialogEndPDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DialogEndPDU: $.ASN1Decoder<DialogEndPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DialogEndPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DialogEndPDU (el: _Element): DialogEndPDU {
    if (!_cached_decoder_for_DialogEndPDU) { _cached_decoder_for_DialogEndPDU = function (el: _Element): DialogEndPDU {
    let destinationDialogId!: DestinationDialogId;
    let remoteOperationsPortion: OPTIONAL<RemoteOperationsPortion>;
    const callbacks: $.DecodingMap = {
        "destinationDialogId": (_el: _Element): void => { destinationDialogId = _decode_DestinationDialogId(_el); },
        "remoteOperationsPortion": (_el: _Element): void => { remoteOperationsPortion = _decode_RemoteOperationsPortion(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DialogEndPDU,
        _extension_additions_list_spec_for_DialogEndPDU,
        _root_component_type_list_2_spec_for_DialogEndPDU,
        undefined,
    );
    return new DialogEndPDU(
        destinationDialogId,
        remoteOperationsPortion
    );
}; }
    return _cached_decoder_for_DialogEndPDU(el);
}

let _cached_encoder_for_DialogEndPDU: $.ASN1Encoder<DialogEndPDU> | null = null;

/**
 * @summary Encodes a(n) DialogEndPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DialogEndPDU, encoded as an ASN.1 Element.
 */
export
function _encode_DialogEndPDU (value: DialogEndPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DialogEndPDU) { _cached_encoder_for_DialogEndPDU = function (value: DialogEndPDU, _elGetter: $.ASN1Encoder<DialogEndPDU>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DestinationDialogId, $.BER)(value.destinationDialogId, $.BER));
    if (value.remoteOperationsPortion !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_RemoteOperationsPortion, $.BER)(value.remoteOperationsPortion, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DialogEndPDU(value, elGetter);
}

/* eslint-enable */
