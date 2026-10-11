/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PASSporT, _decode_PASSporT, _encode_PASSporT } from "../TS33128Payloads/PASSporT.ta.mjs";
// export { PASSporT, _decode_PASSporT, _encode_PASSporT } from "../TS33128Payloads/PASSporT.ta.mjs";
import { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";
// export { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";


/**
 * @summary STIRSHAKENSignatureGeneration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * STIRSHAKENSignatureGeneration ::= SEQUENCE
 * {
 *     pASSporTs                 [1] SEQUENCE OF PASSporT,
 *     encapsulatedSIPMessage    [2] SIPMessage OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class STIRSHAKENSignatureGeneration {
    /**
     * @summary `pASSporTs`.
     * @public
     * @readonly
     */
    readonly pASSporTs: PASSporT[];
    /**
     * @summary `encapsulatedSIPMessage`.
     * @public
     * @readonly
     */
    readonly encapsulatedSIPMessage: OPTIONAL<SIPMessage>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pASSporTs: PASSporT[],
        encapsulatedSIPMessage: OPTIONAL<SIPMessage>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pASSporTs = pASSporTs;
        this.encapsulatedSIPMessage = encapsulatedSIPMessage;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a STIRSHAKENSignatureGeneration
     * @description
     * 
     * This takes an `object` and converts it to a `STIRSHAKENSignatureGeneration`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `STIRSHAKENSignatureGeneration`.
     * @returns {STIRSHAKENSignatureGeneration}
     */
    public static _from_object (_o: { [_K in keyof (STIRSHAKENSignatureGeneration)]: (STIRSHAKENSignatureGeneration)[_K] }): STIRSHAKENSignatureGeneration {
        return new STIRSHAKENSignatureGeneration(_o.pASSporTs, _o.encapsulatedSIPMessage, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of STIRSHAKENSignatureGeneration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_STIRSHAKENSignatureGeneration: $.ComponentSpec[] = [
    new $.ComponentSpec("pASSporTs", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("encapsulatedSIPMessage", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of STIRSHAKENSignatureGeneration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_STIRSHAKENSignatureGeneration: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of STIRSHAKENSignatureGeneration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_STIRSHAKENSignatureGeneration: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_STIRSHAKENSignatureGeneration: $.ASN1Decoder<STIRSHAKENSignatureGeneration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) STIRSHAKENSignatureGeneration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_STIRSHAKENSignatureGeneration (el: _Element): STIRSHAKENSignatureGeneration {
    if (!_cached_decoder_for_STIRSHAKENSignatureGeneration) { _cached_decoder_for_STIRSHAKENSignatureGeneration = function (el: _Element): STIRSHAKENSignatureGeneration {
    let pASSporTs!: PASSporT[];
    let encapsulatedSIPMessage: OPTIONAL<SIPMessage>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pASSporTs": (_el: _Element): void => { pASSporTs = $._decode_implicit<PASSporT[]>(() => $._decodeSequenceOf<PASSporT>(() => _decode_PASSporT))(_el); },
        "encapsulatedSIPMessage": (_el: _Element): void => { encapsulatedSIPMessage = $._decode_implicit<SIPMessage>(() => _decode_SIPMessage)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_STIRSHAKENSignatureGeneration,
        _extension_additions_list_spec_for_STIRSHAKENSignatureGeneration,
        _root_component_type_list_2_spec_for_STIRSHAKENSignatureGeneration,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new STIRSHAKENSignatureGeneration(
        pASSporTs,
        encapsulatedSIPMessage,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_STIRSHAKENSignatureGeneration(el);
}

let _cached_encoder_for_STIRSHAKENSignatureGeneration: $.ASN1Encoder<STIRSHAKENSignatureGeneration> | null = null;

/**
 * @summary Encodes a(n) STIRSHAKENSignatureGeneration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The STIRSHAKENSignatureGeneration, encoded as an ASN.1 Element.
 */
export
function _encode_STIRSHAKENSignatureGeneration (value: STIRSHAKENSignatureGeneration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_STIRSHAKENSignatureGeneration) { _cached_encoder_for_STIRSHAKENSignatureGeneration = function (value: STIRSHAKENSignatureGeneration, _elGetter: $.ASN1Encoder<STIRSHAKENSignatureGeneration>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<PASSporT>(() => _encode_PASSporT, $.BER), $.BER)(value.pASSporTs, $.BER);
    if (value.encapsulatedSIPMessage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SIPMessage, $.BER)(value.encapsulatedSIPMessage, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_STIRSHAKENSignatureGeneration(value, elGetter);
}


/* eslint-enable */
