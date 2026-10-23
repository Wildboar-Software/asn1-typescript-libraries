/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SSIInfo, _decode_SSIInfo, _encode_SSIInfo } from "../IN-SCF-SCF-datatypes/SSIInfo.ta.mjs";
// export { SSIInfo, _decode_SSIInfo, _encode_SSIInfo } from "../IN-SCF-SCF-datatypes/SSIInfo.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary TransferSTSIArg_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransferSTSIArg-Type ::=
 * SEQUENCE {
 *   sSIInfo SSIInfo,
 *   securityParameters [2] SecurityParameters OPTIONAL,
 *   ...,
 *   ...,
 *   extensions [3] Extensions OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TransferSTSIArg_Type {
    /**
     * @summary `sSIInfo`.
     * @public
     * @readonly
     */
    readonly sSIInfo: SSIInfo;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;

    constructor (
        sSIInfo: SSIInfo,
        securityParameters: OPTIONAL<SecurityParameters>,
        _unrecognizedExtensionsList: _Element[] = [],
        extensions: OPTIONAL<Extensions>
    ) {
        this.sSIInfo = sSIInfo;
        this.securityParameters = securityParameters;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
        this.extensions = extensions;
    }

    /**
     * @summary Restructures an object into a TransferSTSIArg_Type
     * @description
     * 
     * This takes an `object` and converts it to a `TransferSTSIArg_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TransferSTSIArg_Type`.
     * @returns {TransferSTSIArg_Type}
     */
    public static _from_object (_o: { [_K in keyof (TransferSTSIArg_Type)]: (TransferSTSIArg_Type)[_K] }): TransferSTSIArg_Type {
        return new TransferSTSIArg_Type(_o.sSIInfo, _o.securityParameters, _o._unrecognizedExtensionsList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of TransferSTSIArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TransferSTSIArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("sSIInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TransferSTSIArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TransferSTSIArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Extension Addition Component Types of TransferSTSIArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TransferSTSIArg_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TransferSTSIArg_Type: $.ASN1Decoder<TransferSTSIArg_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransferSTSIArg_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransferSTSIArg_Type (el: _Element): TransferSTSIArg_Type {
    if (!_cached_decoder_for_TransferSTSIArg_Type) { _cached_decoder_for_TransferSTSIArg_Type = function (el: _Element): TransferSTSIArg_Type {
    let sSIInfo!: SSIInfo;
    let securityParameters: OPTIONAL<SecurityParameters>;
    const _unrecognizedExtensionsList: _Element[] = [];
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "sSIInfo": (_el: _Element): void => { sSIInfo = _decode_SSIInfo(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TransferSTSIArg_Type,
        _extension_additions_list_spec_for_TransferSTSIArg_Type,
        _root_component_type_list_2_spec_for_TransferSTSIArg_Type,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TransferSTSIArg_Type(
        sSIInfo,
        securityParameters,
        _unrecognizedExtensionsList,
        extensions
    );
}; }
    return _cached_decoder_for_TransferSTSIArg_Type(el);
}

let _cached_encoder_for_TransferSTSIArg_Type: $.ASN1Encoder<TransferSTSIArg_Type> | null = null;

/**
 * @summary Encodes a(n) TransferSTSIArg_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferSTSIArg_Type, encoded as an ASN.1 Element.
 */
export
function _encode_TransferSTSIArg_Type (value: TransferSTSIArg_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransferSTSIArg_Type) { _cached_encoder_for_TransferSTSIArg_Type = function (value: TransferSTSIArg_Type, elGetter: $.ASN1Encoder<TransferSTSIArg_Type>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_SSIInfo(value.sSIInfo, $.BER);
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TransferSTSIArg_Type(value, elGetter);
}


/* eslint-enable */
