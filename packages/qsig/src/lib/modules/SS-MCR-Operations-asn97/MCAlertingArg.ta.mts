/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Correlation, _decode_Correlation, _encode_Correlation } from "../SS-MCR-Operations-asn97/Correlation.ta.mjs";
import { MCRExtensions, _decode_MCRExtensions, _encode_MCRExtensions } from "../SS-MCR-Operations-asn97/MCRExtensions.ta.mjs";

/**
 * @summary MCAlertingArg
 * @description
 *
 * Argument of `mCAlerting` (ECMA-344 §6.3.1). Sent in FACILITY when the
 * Requested Call is alerting (§6.5.2.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-344/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCAlertingArg ::= SEQUENCE {
 *     correlation Correlation,
 *     extensions MCRExtensions OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MCAlertingArg {
    /**
     * @summary `correlation`.
     * @description
     *
     * The `correlation` value received in `mCRequest` (ECMA-344 §6.5.2.1.2).
     * @public
     * @readonly
     */
    readonly correlation: Correlation;
    /**
     * @summary `extensions`.
     * @description
     *
     * Manufacturer-specific extension. This edition defines none in
     * `MakeCallRequestExtension` (ECMA-344 §6.3.1).
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<MCRExtensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        correlation: Correlation,
        extensions?: OPTIONAL<MCRExtensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.correlation = correlation;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCAlertingArg
     * @description
     * 
     * This takes an `object` and converts it to a `MCAlertingArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCAlertingArg`.
     * @returns {MCAlertingArg}
     */
    public static _from_object (_o: { [_K in keyof (MCAlertingArg)]: (MCAlertingArg)[_K] }): MCAlertingArg {
        return new MCAlertingArg(_o.correlation, _o.extensions, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of MCAlertingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCAlertingArg: $.ComponentSpec[] = [
    new $.ComponentSpec("correlation", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1)))
];

/**
 * @summary The Trailing Root Component Types of MCAlertingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCAlertingArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCAlertingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCAlertingArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCAlertingArg: $.ASN1Decoder<MCAlertingArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCAlertingArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCAlertingArg (el: _Element): MCAlertingArg {
    if (!_cached_decoder_for_MCAlertingArg) { _cached_decoder_for_MCAlertingArg = function (el: _Element): MCAlertingArg {
    let correlation!: Correlation;
    let extensions: OPTIONAL<MCRExtensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "correlation": (_el: _Element): void => { correlation = _decode_Correlation(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_MCRExtensions(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCAlertingArg,
        _extension_additions_list_spec_for_MCAlertingArg,
        _root_component_type_list_2_spec_for_MCAlertingArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCAlertingArg(
        correlation,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCAlertingArg(el);
}

let _cached_encoder_for_MCAlertingArg: $.ASN1Encoder<MCAlertingArg> | null = null;

/**
 * @summary Encodes a(n) MCAlertingArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCAlertingArg, encoded as an ASN.1 Element.
 */
export
function _encode_MCAlertingArg (value: MCAlertingArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCAlertingArg) { _cached_encoder_for_MCAlertingArg = function (value: MCAlertingArg, _elGetter: $.ASN1Encoder<MCAlertingArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_Correlation(value.correlation, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_MCRExtensions(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCAlertingArg(value, elGetter);
}

/* eslint-enable */
