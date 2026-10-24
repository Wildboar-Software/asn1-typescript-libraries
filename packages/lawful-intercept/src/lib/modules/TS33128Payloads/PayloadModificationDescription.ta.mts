/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ModificationLocation, _decode_ModificationLocation, _encode_ModificationLocation } from "../TS33128Payloads/ModificationLocation.ta.mjs";
// export { ModificationLocation, _decode_ModificationLocation, _encode_ModificationLocation } from "../TS33128Payloads/ModificationLocation.ta.mjs";
import { ModificationType, _decode_ModificationType, _encode_ModificationType } from "../TS33128Payloads/ModificationType.ta.mjs";
// export { ModificationType, _decode_ModificationType, _encode_ModificationType } from "../TS33128Payloads/ModificationType.ta.mjs";


/**
 * @summary PayloadModificationDescription
 * @description
 * 
 * The PayloadModificationDescription shall be used to describe redactions
 * performed on a payload.
 *
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PayloadModificationDescription ::= SEQUENCE
 * {
 *     modificationLocation [1] ModificationLocation,
 *     modificationType     [2] ModificationType
 * }
 * ```
 * 
 * @class
 */
export
class PayloadModificationDescription {
    /**
     * @summary `modificationLocation`.
     * @description
     *
     * Contains criteria used to identify where the information redacted from
     * the encapsulated payload was located within the payload.
     *
     * @public
     * @readonly
     */
    readonly modificationLocation: ModificationLocation;
    /**
     * @summary `modificationType`.
     * @description
     *
     * Contains details on the method used to redact the information from the
     * encapsulated payload.
     *
     * @public
     * @readonly
     */
    readonly modificationType: ModificationType;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        modificationLocation: ModificationLocation,
        modificationType: ModificationType,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.modificationLocation = modificationLocation;
        this.modificationType = modificationType;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PayloadModificationDescription
     * @description
     * 
     * This takes an `object` and converts it to a `PayloadModificationDescription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PayloadModificationDescription`.
     * @returns {PayloadModificationDescription}
     */
    public static _from_object (_o: { [_K in keyof (PayloadModificationDescription)]: (PayloadModificationDescription)[_K] }): PayloadModificationDescription {
        return new PayloadModificationDescription(_o.modificationLocation, _o.modificationType, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PayloadModificationDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PayloadModificationDescription: $.ComponentSpec[] = [
    new $.ComponentSpec("modificationLocation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("modificationType", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PayloadModificationDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PayloadModificationDescription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PayloadModificationDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PayloadModificationDescription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PayloadModificationDescription: $.ASN1Decoder<PayloadModificationDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PayloadModificationDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PayloadModificationDescription (el: _Element): PayloadModificationDescription {
    if (!_cached_decoder_for_PayloadModificationDescription) { _cached_decoder_for_PayloadModificationDescription = function (el: _Element): PayloadModificationDescription {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PayloadModificationDescription contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "modificationLocation";
    sequence[1].name = "modificationType";
    let modificationLocation!: ModificationLocation;
    let modificationType!: ModificationType;
    modificationLocation = $._decode_explicit<ModificationLocation>(() => _decode_ModificationLocation)(sequence[0]);
    modificationType = $._decode_explicit<ModificationType>(() => _decode_ModificationType)(sequence[1]);
    return new PayloadModificationDescription(
        modificationLocation,
        modificationType,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_PayloadModificationDescription(el);
}

let _cached_encoder_for_PayloadModificationDescription: $.ASN1Encoder<PayloadModificationDescription> | null = null;

/**
 * @summary Encodes a(n) PayloadModificationDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PayloadModificationDescription, encoded as an ASN.1 Element.
 */
export
function _encode_PayloadModificationDescription (value: PayloadModificationDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PayloadModificationDescription) { _cached_encoder_for_PayloadModificationDescription = function (value: PayloadModificationDescription, elGetter: $.ASN1Encoder<PayloadModificationDescription>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ModificationLocation, $.BER)(value.modificationLocation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ModificationType, $.BER)(value.modificationType, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PayloadModificationDescription(value, elGetter);
}


/* eslint-enable */
