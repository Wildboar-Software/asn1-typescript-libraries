/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyInfo, _decode_PartyInfo, _encode_PartyInfo } from "../SS-MCM-Operations-asn1-97/PartyInfo.ta.mjs";
import { type MCMChange, _decode_MCMChange, _encode_MCMChange } from "../SS-MCM-Operations-asn1-97/MCMChange.ta.mjs";
import { type MCMExtensions, _decode_MCMExtensions, _encode_MCMExtensions } from "../SS-MCM-Operations-asn1-97/MCMExtensions.ta.mjs";

/**
 * @summary MCMServiceArg
 * @description
 *
 * Argument of `mCMService` (ECMA-347 §6.5.2.1.1). Identifies
 * the Served User and the Message Centre, and carries one
 * request: activation, deactivation, or reset to the
 * service-provider default.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMServiceArg ::= SEQUENCE {
 *     partyInfo PartyInfo,
 *     mCMChange MCMChange,
 *     extensions MCMExtensions OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MCMServiceArg {
    /**
     * @summary `partyInfo`.
     * @description
     *
     * Served User address and Message Centre identity.
     * ECMA-347 §6.5.2.1.1.
     * @public
     * @readonly
     */
    readonly partyInfo: PartyInfo;
    /**
     * @summary `mCMChange`.
     * @description
     *
     * Activation, deactivation, or reset to the provider
     * default. ECMA-347 §6.5.2.1.1.
     * @public
     * @readonly
     */
    readonly mCMChange: MCMChange;
    /**
     * @summary `extensions`.
     * @description
     *
     * Manufacturer-specific extension. `MCMExtSet` defines none.
     * The procedures do not mention this component. ECMA-347 §6.3.1.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<MCMExtensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        partyInfo: PartyInfo,
        mCMChange: MCMChange,
        extensions?: OPTIONAL<MCMExtensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.partyInfo = partyInfo;
        this.mCMChange = mCMChange;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCMServiceArg
     * @description
     * 
     * This takes an `object` and converts it to a `MCMServiceArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCMServiceArg`.
     * @returns {MCMServiceArg}
     */
    public static _from_object (_o: { [_K in keyof (MCMServiceArg)]: (MCMServiceArg)[_K] }): MCMServiceArg {
        return new MCMServiceArg(_o.partyInfo, _o.mCMChange, _o.extensions, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of MCMServiceArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCMServiceArg: $.ComponentSpec[] = [
    new $.ComponentSpec("partyInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("mCMChange", false, $.hasAnyTag),
    new $.ComponentSpec("extensions", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of MCMServiceArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCMServiceArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCMServiceArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCMServiceArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCMServiceArg: $.ASN1Decoder<MCMServiceArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCMServiceArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCMServiceArg (el: _Element): MCMServiceArg {
    if (!_cached_decoder_for_MCMServiceArg) { _cached_decoder_for_MCMServiceArg = function (el: _Element): MCMServiceArg {
    let partyInfo!: PartyInfo;
    let mCMChange!: MCMChange;
    let extensions: OPTIONAL<MCMExtensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "partyInfo": (_el: _Element): void => { partyInfo = _decode_PartyInfo(_el); },
        "mCMChange": (_el: _Element): void => { mCMChange = _decode_MCMChange(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_MCMExtensions(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCMServiceArg,
        _extension_additions_list_spec_for_MCMServiceArg,
        _root_component_type_list_2_spec_for_MCMServiceArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCMServiceArg(
        partyInfo,
        mCMChange,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCMServiceArg(el);
}

let _cached_encoder_for_MCMServiceArg: $.ASN1Encoder<MCMServiceArg> | null = null;

/**
 * @summary Encodes a(n) MCMServiceArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMServiceArg, encoded as an ASN.1 Element.
 */
export
function _encode_MCMServiceArg (value: MCMServiceArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCMServiceArg) { _cached_encoder_for_MCMServiceArg = function (value: MCMServiceArg, _elGetter: $.ASN1Encoder<MCMServiceArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_PartyInfo(value.partyInfo, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_MCMChange(value.mCMChange, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_MCMExtensions(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCMServiceArg(value, elGetter);
}

/* eslint-enable */
