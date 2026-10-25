/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TargetIdentifier, _decode_TargetIdentifier, _encode_TargetIdentifier } from "../TS33128Payloads/TargetIdentifier.ta.mjs";
// export { TargetIdentifier, _decode_TargetIdentifier, _encode_TargetIdentifier } from "../TS33128Payloads/TargetIdentifier.ta.mjs";
import { TargetIdentifierProvenance, _decode_TargetIdentifierProvenance, _encode_TargetIdentifierProvenance, _enum_for_TargetIdentifierProvenance } from "../TS33128Payloads/TargetIdentifierProvenance.ta.mjs";
// export { TargetIdentifierProvenance, _enum_for_TargetIdentifierProvenance, TargetIdentifierProvenance_lEAProvided /* IMPORTED_LONG_ENUMERATION_ITEM */, lEAProvided /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetIdentifierProvenance_observed /* IMPORTED_LONG_ENUMERATION_ITEM */, observed /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetIdentifierProvenance_matchedOn /* IMPORTED_LONG_ENUMERATION_ITEM */, matchedOn /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetIdentifierProvenance_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TargetIdentifierProvenance, _encode_TargetIdentifierProvenance } from "../TS33128Payloads/TargetIdentifierProvenance.ta.mjs";


/**
 * @summary IRITargetIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRITargetIdentifier ::= SEQUENCE
 * {
 *     identifier                                          [1] TargetIdentifier,
 *     provenance                                          [2] TargetIdentifierProvenance OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IRITargetIdentifier {
    /**
     * @summary `identifier`.
     * @public
     * @readonly
     */
    readonly identifier: TargetIdentifier;
    /**
     * @summary `provenance`.
     * @public
     * @readonly
     */
    readonly provenance: OPTIONAL<TargetIdentifierProvenance>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        identifier: TargetIdentifier,
        provenance?: OPTIONAL<TargetIdentifierProvenance>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.identifier = identifier;
        this.provenance = provenance;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IRITargetIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `IRITargetIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IRITargetIdentifier`.
     * @returns {IRITargetIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (IRITargetIdentifier)]: (IRITargetIdentifier)[_K] }): IRITargetIdentifier {
        return new IRITargetIdentifier(_o.identifier, _o.provenance, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `provenance`
         * @public
         * @static
         */

    public static _enum_for_provenance: typeof _enum_for_TargetIdentifierProvenance = _enum_for_TargetIdentifierProvenance;
}

/**
 * @summary The Leading Root Component Types of IRITargetIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IRITargetIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("provenance", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IRITargetIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IRITargetIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IRITargetIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IRITargetIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IRITargetIdentifier: $.ASN1Decoder<IRITargetIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRITargetIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRITargetIdentifier (el: _Element): IRITargetIdentifier {
    if (!_cached_decoder_for_IRITargetIdentifier) { _cached_decoder_for_IRITargetIdentifier = function (el: _Element): IRITargetIdentifier {
    let identifier!: TargetIdentifier;
    let provenance: OPTIONAL<TargetIdentifierProvenance>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "identifier": (_el: _Element): void => { identifier = $._decode_explicit<TargetIdentifier>(() => _decode_TargetIdentifier)(_el); },
        "provenance": (_el: _Element): void => { provenance = $._decode_implicit<TargetIdentifierProvenance>(() => _decode_TargetIdentifierProvenance)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IRITargetIdentifier,
        _extension_additions_list_spec_for_IRITargetIdentifier,
        _root_component_type_list_2_spec_for_IRITargetIdentifier,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IRITargetIdentifier(
        identifier,
        provenance,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IRITargetIdentifier(el);
}

let _cached_encoder_for_IRITargetIdentifier: $.ASN1Encoder<IRITargetIdentifier> | null = null;

/**
 * @summary Encodes a(n) IRITargetIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRITargetIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_IRITargetIdentifier (value: IRITargetIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRITargetIdentifier) { _cached_encoder_for_IRITargetIdentifier = function (value: IRITargetIdentifier, elGetter: $.ASN1Encoder<IRITargetIdentifier>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_TargetIdentifier, $.BER)(value.identifier, $.BER);
    if (value.provenance !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_TargetIdentifierProvenance, $.BER)(value.provenance, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IRITargetIdentifier(value, elGetter);
}


/* eslint-enable */
