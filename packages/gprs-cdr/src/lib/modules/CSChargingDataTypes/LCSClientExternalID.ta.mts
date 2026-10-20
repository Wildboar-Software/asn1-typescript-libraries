/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../CSChargingDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../CSChargingDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary LCSClientExternalID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSClientExternalID ::= SEQUENCE {
 *    externalAddress      [0] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    extensionContainer   [1] IMPLICIT ExtensionContainer OPTIONAL,
 *    ... }
 * ```
 * 
 * @class
 */
export
class LCSClientExternalID {
    /**
     * @summary `externalAddress`.
     * @public
     * @readonly
     */
    readonly externalAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `extensionContainer`.
     * @public
     * @readonly
     */
    readonly extensionContainer: OPTIONAL<ExtensionContainer>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        externalAddress: OPTIONAL<OCTET_STRING>,
        extensionContainer: OPTIONAL<ExtensionContainer>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.externalAddress = externalAddress;
        this.extensionContainer = extensionContainer;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a LCSClientExternalID
     * @description
     * 
     * This takes an `object` and converts it to a `LCSClientExternalID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LCSClientExternalID`.
     * @returns {LCSClientExternalID}
     */
    public static _from_object (_o: { [_K in keyof (LCSClientExternalID)]: (LCSClientExternalID)[_K] }): LCSClientExternalID {
        return new LCSClientExternalID(_o.externalAddress, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LCSClientExternalID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LCSClientExternalID: $.ComponentSpec[] = [
    new $.ComponentSpec("externalAddress", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of LCSClientExternalID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LCSClientExternalID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LCSClientExternalID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LCSClientExternalID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LCSClientExternalID: $.ASN1Decoder<LCSClientExternalID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSClientExternalID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSClientExternalID (el: _Element): LCSClientExternalID {
    if (!_cached_decoder_for_LCSClientExternalID) { _cached_decoder_for_LCSClientExternalID = function (el: _Element): LCSClientExternalID {
    let externalAddress: OPTIONAL<OCTET_STRING>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "externalAddress": (_el: _Element): void => { externalAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LCSClientExternalID,
        _extension_additions_list_spec_for_LCSClientExternalID,
        _root_component_type_list_2_spec_for_LCSClientExternalID,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LCSClientExternalID(
        externalAddress,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LCSClientExternalID(el);
}

let _cached_encoder_for_LCSClientExternalID: $.ASN1Encoder<LCSClientExternalID> | null = null;

/**
 * @summary Encodes a(n) LCSClientExternalID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSClientExternalID, encoded as an ASN.1 Element.
 */
export
function _encode_LCSClientExternalID (value: LCSClientExternalID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSClientExternalID) { _cached_encoder_for_LCSClientExternalID = function (value: LCSClientExternalID, elGetter: $.ASN1Encoder<LCSClientExternalID>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.externalAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.externalAddress, $.BER);
    }
    if (value.extensionContainer !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LCSClientExternalID(value, elGetter);
}


/* eslint-enable */
