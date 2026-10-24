/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PresentedAddressUnscreened, _decode_PresentedAddressUnscreened, _encode_PresentedAddressUnscreened } from "../Addressing-Data-Elements-asn1-97/PresentedAddressUnscreened.ta.mjs";
import { Correlation, _decode_Correlation, _encode_Correlation } from "../SS-MCR-Operations-asn97/Correlation.ta.mjs";
import { MCRExtensions, _decode_MCRExtensions, _encode_MCRExtensions } from "../SS-MCR-Operations-asn97/MCRExtensions.ta.mjs";

/**
 * @summary MCInformArg
 * @description
 *
 * Argument of `mCInform` (ECMA-344 §6.3.1). `requestingAddress`,
 * `cooperatingAddress`, and `correlation` are copied from `mCRequest`
 * (§6.5.2.1.2). The Destination PINX may present them to the Destination User
 * (§6.5.3.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-344/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCInformArg ::= SEQUENCE {
 *     requestingAddress [0] PresentedAddressUnscreened OPTIONAL,
 *     cooperatingAddress [1] PresentedAddressUnscreened OPTIONAL,
 *     correlation Correlation,
 *     extensions MCRExtensions OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MCInformArg {
    /**
     * @summary `requestingAddress`.
     * @description
     *
     * Requesting User address copied from `mCRequest`, when that element was
     * present (ECMA-344 §6.5.2.1.2).
     * @public
     * @readonly
     */
    readonly requestingAddress: OPTIONAL<PresentedAddressUnscreened>;
    /**
     * @summary `cooperatingAddress`.
     * @description
     *
     * Co-operating User address copied from `mCRequest`, when that element was
     * present (ECMA-344 §6.5.2.1.2).
     * @public
     * @readonly
     */
    readonly cooperatingAddress: OPTIONAL<PresentedAddressUnscreened>;
    /**
     * @summary `correlation`.
     * @description
     *
     * Correlation copied from `mCRequest` (ECMA-344 §6.5.2.1.2).
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
        requestingAddress: OPTIONAL<PresentedAddressUnscreened>,
        cooperatingAddress: OPTIONAL<PresentedAddressUnscreened>,
        correlation: Correlation,
        extensions?: OPTIONAL<MCRExtensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.requestingAddress = requestingAddress;
        this.cooperatingAddress = cooperatingAddress;
        this.correlation = correlation;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCInformArg
     * @description
     * 
     * This takes an `object` and converts it to a `MCInformArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCInformArg`.
     * @returns {MCInformArg}
     */
    public static _from_object (_o: { [_K in keyof (MCInformArg)]: (MCInformArg)[_K] }): MCInformArg {
        return new MCInformArg(_o.requestingAddress, _o.cooperatingAddress, _o.correlation, _o.extensions, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of MCInformArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCInformArg: $.ComponentSpec[] = [
    new $.ComponentSpec("requestingAddress", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cooperatingAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("correlation", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1)))
];

/**
 * @summary The Trailing Root Component Types of MCInformArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCInformArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCInformArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCInformArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCInformArg: $.ASN1Decoder<MCInformArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCInformArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCInformArg (el: _Element): MCInformArg {
    if (!_cached_decoder_for_MCInformArg) { _cached_decoder_for_MCInformArg = function (el: _Element): MCInformArg {
    let requestingAddress: OPTIONAL<PresentedAddressUnscreened>;
    let cooperatingAddress: OPTIONAL<PresentedAddressUnscreened>;
    let correlation!: Correlation;
    let extensions: OPTIONAL<MCRExtensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestingAddress": (_el: _Element): void => { requestingAddress = $._decode_explicit<PresentedAddressUnscreened>(() => _decode_PresentedAddressUnscreened)(_el); },
        "cooperatingAddress": (_el: _Element): void => { cooperatingAddress = $._decode_explicit<PresentedAddressUnscreened>(() => _decode_PresentedAddressUnscreened)(_el); },
        "correlation": (_el: _Element): void => { correlation = _decode_Correlation(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_MCRExtensions(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCInformArg,
        _extension_additions_list_spec_for_MCInformArg,
        _root_component_type_list_2_spec_for_MCInformArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCInformArg(
        requestingAddress,
        cooperatingAddress,
        correlation,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCInformArg(el);
}

let _cached_encoder_for_MCInformArg: $.ASN1Encoder<MCInformArg> | null = null;

/**
 * @summary Encodes a(n) MCInformArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCInformArg, encoded as an ASN.1 Element.
 */
export
function _encode_MCInformArg (value: MCInformArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCInformArg) { _cached_encoder_for_MCInformArg = function (value: MCInformArg, _elGetter: $.ASN1Encoder<MCInformArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.requestingAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_PresentedAddressUnscreened, $.BER)(value.requestingAddress, $.BER);
    }
    if (value.cooperatingAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_PresentedAddressUnscreened, $.BER)(value.cooperatingAddress, $.BER);
    }
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
    return _cached_encoder_for_MCInformArg(value, elGetter);
}

/* eslint-enable */
