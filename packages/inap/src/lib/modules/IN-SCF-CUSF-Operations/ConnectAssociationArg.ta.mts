/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { type GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../IN-SSF-SCF-datatypes/GenericNumbers.ta.mjs";
// export { GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../IN-SSF-SCF-datatypes/GenericNumbers.ta.mjs";


/**
 * @summary ConnectAssociationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectAssociationArg ::= SEQUENCE {
 *   address         [0]  CalledPartyNumber,
 *   extensions      [1]  Extensions OPTIONAL,
 *   genericNumbers  [2]  GenericNumbers OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ConnectAssociationArg {
    /**
     * @summary `address`.
     * @public
     * @readonly
     */
    readonly address: CalledPartyNumber;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `genericNumbers`.
     * @public
     * @readonly
     */
    readonly genericNumbers: OPTIONAL<GenericNumbers>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        address: CalledPartyNumber,
        extensions?: OPTIONAL<Extensions>,
        genericNumbers?: OPTIONAL<GenericNumbers>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.address = address;
        this.extensions = extensions;
        this.genericNumbers = genericNumbers;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ConnectAssociationArg
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectAssociationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectAssociationArg`.
     * @returns {ConnectAssociationArg}
     */
    public static _from_object (_o: { [_K in keyof (ConnectAssociationArg)]: (ConnectAssociationArg)[_K] }): ConnectAssociationArg {
        return new ConnectAssociationArg(_o.address, _o.extensions, _o.genericNumbers, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectAssociationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectAssociationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("address", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("genericNumbers", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ConnectAssociationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectAssociationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectAssociationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectAssociationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectAssociationArg: $.ASN1Decoder<ConnectAssociationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectAssociationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectAssociationArg (el: _Element): ConnectAssociationArg {
    if (!_cached_decoder_for_ConnectAssociationArg) { _cached_decoder_for_ConnectAssociationArg = function (el: _Element): ConnectAssociationArg {
    let address!: CalledPartyNumber;
    let extensions: OPTIONAL<Extensions>;
    let genericNumbers: OPTIONAL<GenericNumbers>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "address": (_el: _Element): void => { address = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "genericNumbers": (_el: _Element): void => { genericNumbers = $._decode_implicit<GenericNumbers>(() => _decode_GenericNumbers)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectAssociationArg,
        _extension_additions_list_spec_for_ConnectAssociationArg,
        _root_component_type_list_2_spec_for_ConnectAssociationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ConnectAssociationArg(
        address,
        extensions,
        genericNumbers,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ConnectAssociationArg(el);
}

let _cached_encoder_for_ConnectAssociationArg: $.ASN1Encoder<ConnectAssociationArg> | null = null;

/**
 * @summary Encodes a(n) ConnectAssociationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectAssociationArg, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectAssociationArg (value: ConnectAssociationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectAssociationArg) { _cached_encoder_for_ConnectAssociationArg = function (value: ConnectAssociationArg, elGetter: $.ASN1Encoder<ConnectAssociationArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CalledPartyNumber, $.BER)(value.address, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.genericNumbers !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_GenericNumbers, $.BER)(value.genericNumbers, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ConnectAssociationArg(value, elGetter);
}


/* eslint-enable */
