/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OriginationDialogId, _decode_OriginationDialogId, _encode_OriginationDialogId } from "../Dialog-Service-Pdus-asn1-97/OriginationDialogId.ta.mjs";
import { RemoteOperationsPortion, _decode_RemoteOperationsPortion, _encode_RemoteOperationsPortion } from "../Dialog-Service-Pdus-asn1-97/RemoteOperationsPortion.ta.mjs";

/**
 * @summary DialogBeginPDU
 * @description
 *
 * Opens a dialogue (ECMA-165 §8.4.1.1). The initiator chooses an origination
 * identifier that distinguishes this dialogue from its others, may include ROSE
 * or ACSE APDUs, starts timer T_Originating_Dialogue (Table 13), and enters
 * Initiate sending. The receiver checks the identifier, saves it, and enters
 * Initiate receiving (§8.4.2.1). An invalid identifier is discarded and the
 * receiver stays Idle.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DialogBeginPDU ::= SEQUENCE {
 *     originationDialogId OriginationDialogId,
 *     remoteOperationsPortion RemoteOperationsPortion OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DialogBeginPDU {
    /**
     * @summary `originationDialogId`.
     * @description
     *
     * Dialogue identifier selected by the initiating PINX. It must distinguish
     * this dialogue from any other dialogue that PINX is in (ECMA-165
     * §8.4.1.1).
     * @public
     * @readonly
     */
    readonly originationDialogId: OriginationDialogId;
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
        remoteOperationsPortion?: OPTIONAL<RemoteOperationsPortion>
    ) {
        this.originationDialogId = originationDialogId;
        this.remoteOperationsPortion = remoteOperationsPortion;
    }

    /**
     * @summary Restructures an object into a DialogBeginPDU
     * @description
     * 
     * This takes an `object` and converts it to a `DialogBeginPDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DialogBeginPDU`.
     * @returns {DialogBeginPDU}
     */
    public static _from_object (_o: { [_K in keyof (DialogBeginPDU)]: (DialogBeginPDU)[_K] }): DialogBeginPDU {
        return new DialogBeginPDU(_o.originationDialogId, _o.remoteOperationsPortion);
    }

}

/**
 * @summary The Leading Root Component Types of DialogBeginPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DialogBeginPDU: $.ComponentSpec[] = [
    new $.ComponentSpec("originationDialogId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("remoteOperationsPortion", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of DialogBeginPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DialogBeginPDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DialogBeginPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DialogBeginPDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DialogBeginPDU: $.ASN1Decoder<DialogBeginPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DialogBeginPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DialogBeginPDU (el: _Element): DialogBeginPDU {
    if (!_cached_decoder_for_DialogBeginPDU) { _cached_decoder_for_DialogBeginPDU = function (el: _Element): DialogBeginPDU {
    let originationDialogId!: OriginationDialogId;
    let remoteOperationsPortion: OPTIONAL<RemoteOperationsPortion>;
    const callbacks: $.DecodingMap = {
        "originationDialogId": (_el: _Element): void => { originationDialogId = _decode_OriginationDialogId(_el); },
        "remoteOperationsPortion": (_el: _Element): void => { remoteOperationsPortion = _decode_RemoteOperationsPortion(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DialogBeginPDU,
        _extension_additions_list_spec_for_DialogBeginPDU,
        _root_component_type_list_2_spec_for_DialogBeginPDU,
        undefined,
    );
    return new DialogBeginPDU(
        originationDialogId,
        remoteOperationsPortion
    );
}; }
    return _cached_decoder_for_DialogBeginPDU(el);
}

let _cached_encoder_for_DialogBeginPDU: $.ASN1Encoder<DialogBeginPDU> | null = null;

/**
 * @summary Encodes a(n) DialogBeginPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DialogBeginPDU, encoded as an ASN.1 Element.
 */
export
function _encode_DialogBeginPDU (value: DialogBeginPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DialogBeginPDU) { _cached_encoder_for_DialogBeginPDU = function (value: DialogBeginPDU, _elGetter: $.ASN1Encoder<DialogBeginPDU>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_OriginationDialogId, $.BER)(value.originationDialogId, $.BER));
    if (value.remoteOperationsPortion !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_RemoteOperationsPortion, $.BER)(value.remoteOperationsPortion, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DialogBeginPDU(value, elGetter);
}

/* eslint-enable */
