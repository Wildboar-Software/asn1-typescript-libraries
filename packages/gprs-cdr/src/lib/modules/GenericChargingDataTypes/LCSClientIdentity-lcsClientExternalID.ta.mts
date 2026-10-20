/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LCSClientIdentity_lcsClientExternalID_extensionContainer, _decode_LCSClientIdentity_lcsClientExternalID_extensionContainer, _encode_LCSClientIdentity_lcsClientExternalID_extensionContainer } from "../GenericChargingDataTypes/LCSClientIdentity-lcsClientExternalID-extensionContainer.ta.mjs";
// export { LCSClientIdentity_lcsClientExternalID_extensionContainer, _decode_LCSClientIdentity_lcsClientExternalID_extensionContainer, _encode_LCSClientIdentity_lcsClientExternalID_extensionContainer } from "../GenericChargingDataTypes/LCSClientIdentity-lcsClientExternalID-extensionContainer.ta.mjs";


/**
 * @summary LCSClientIdentity_lcsClientExternalID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSClientIdentity-lcsClientExternalID ::= SEQUENCE {
 *    externalAddress      [0] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    extensionContainer   [1] IMPLICIT SEQUENCE {
 *       privateExtensionList   [0] IMPLICIT SEQUENCE  ( SIZE( 1 .. 10 ) ) OF
 *          SEQUENCE {
 *             extId      MAP-EXTENSION.&extensionId ({ExtensionSet}) ,
 *             extType    MAP-EXTENSION.&ExtensionType ({ExtensionSet}{@extId})  OPTIONAL} OPTIONAL,
 *       pcs-Extensions         [1] IMPLICIT SEQUENCE {
 *          ... } OPTIONAL,
 *       ... } OPTIONAL,
 *    ...
 * }
 * ```
 * 
 * @class
 */
export
class LCSClientIdentity_lcsClientExternalID {
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
    readonly extensionContainer: OPTIONAL<LCSClientIdentity_lcsClientExternalID_extensionContainer>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        externalAddress: OPTIONAL<OCTET_STRING>,
        extensionContainer: OPTIONAL<LCSClientIdentity_lcsClientExternalID_extensionContainer>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.externalAddress = externalAddress;
        this.extensionContainer = extensionContainer;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a LCSClientIdentity_lcsClientExternalID
     * @description
     * 
     * This takes an `object` and converts it to a `LCSClientIdentity_lcsClientExternalID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LCSClientIdentity_lcsClientExternalID`.
     * @returns {LCSClientIdentity_lcsClientExternalID}
     */
    public static _from_object (_o: { [_K in keyof (LCSClientIdentity_lcsClientExternalID)]: (LCSClientIdentity_lcsClientExternalID)[_K] }): LCSClientIdentity_lcsClientExternalID {
        return new LCSClientIdentity_lcsClientExternalID(_o.externalAddress, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LCSClientIdentity_lcsClientExternalID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LCSClientIdentity_lcsClientExternalID: $.ComponentSpec[] = [
    new $.ComponentSpec("externalAddress", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of LCSClientIdentity_lcsClientExternalID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LCSClientIdentity_lcsClientExternalID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LCSClientIdentity_lcsClientExternalID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LCSClientIdentity_lcsClientExternalID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LCSClientIdentity_lcsClientExternalID: $.ASN1Decoder<LCSClientIdentity_lcsClientExternalID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSClientIdentity_lcsClientExternalID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSClientIdentity_lcsClientExternalID (el: _Element): LCSClientIdentity_lcsClientExternalID {
    if (!_cached_decoder_for_LCSClientIdentity_lcsClientExternalID) { _cached_decoder_for_LCSClientIdentity_lcsClientExternalID = function (el: _Element): LCSClientIdentity_lcsClientExternalID {
    let externalAddress: OPTIONAL<OCTET_STRING>;
    let extensionContainer: OPTIONAL<LCSClientIdentity_lcsClientExternalID_extensionContainer>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "externalAddress": (_el: _Element): void => { externalAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<LCSClientIdentity_lcsClientExternalID_extensionContainer>(() => _decode_LCSClientIdentity_lcsClientExternalID_extensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LCSClientIdentity_lcsClientExternalID,
        _extension_additions_list_spec_for_LCSClientIdentity_lcsClientExternalID,
        _root_component_type_list_2_spec_for_LCSClientIdentity_lcsClientExternalID,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LCSClientIdentity_lcsClientExternalID(
        externalAddress,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LCSClientIdentity_lcsClientExternalID(el);
}

let _cached_encoder_for_LCSClientIdentity_lcsClientExternalID: $.ASN1Encoder<LCSClientIdentity_lcsClientExternalID> | null = null;

/**
 * @summary Encodes a(n) LCSClientIdentity_lcsClientExternalID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSClientIdentity_lcsClientExternalID, encoded as an ASN.1 Element.
 */
export
function _encode_LCSClientIdentity_lcsClientExternalID (value: LCSClientIdentity_lcsClientExternalID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSClientIdentity_lcsClientExternalID) { _cached_encoder_for_LCSClientIdentity_lcsClientExternalID = function (value: LCSClientIdentity_lcsClientExternalID, elGetter: $.ASN1Encoder<LCSClientIdentity_lcsClientExternalID>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.externalAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.externalAddress, $.BER);
    }
    if (value.extensionContainer !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_LCSClientIdentity_lcsClientExternalID_extensionContainer, $.BER)(value.extensionContainer, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LCSClientIdentity_lcsClientExternalID(value, elGetter);
}


/* eslint-enable */
