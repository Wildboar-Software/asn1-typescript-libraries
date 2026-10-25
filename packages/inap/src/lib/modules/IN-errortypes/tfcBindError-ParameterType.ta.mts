/* eslint-disable */
import {
    type OPTIONAL,
    TRUE_BIT,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Versions, Versions_v1 /* IMPORTED_LONG_NAMED_BIT */, _decode_Versions, _encode_Versions } from "../DirectoryAbstractService/Versions.ta.mjs";
// export { Versions, Versions_v1 /* IMPORTED_LONG_NAMED_BIT */, v1 /* IMPORTED_SHORT_NAMED_BIT */, Versions_v2 /* IMPORTED_LONG_NAMED_BIT */, v2 /* IMPORTED_SHORT_NAMED_BIT */, _decode_Versions, _encode_Versions } from "../DirectoryAbstractService/Versions.ta.mjs";
import { _decode_tfcBindError_ParameterType_error, _encode_tfcBindError_ParameterType_error, type tfcBindError_ParameterType_error } from "../IN-errortypes/tfcBindError-ParameterType-error.ta.mjs";
// export { tfcBindError_ParameterType_error, _decode_tfcBindError_ParameterType_error, _encode_tfcBindError_ParameterType_error } from "../IN-errortypes/tfcBindError-ParameterType-error.ta.mjs";


/**
 * @summary tfcBindError_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tfcBindError-ParameterType ::=
 * SET {
 *   versions [0] Versions DEFAULT {
 *     v1
 *   },
 *   error CHOICE {
 *     serviceError [1] ServiceProblem,
 *     securityError [2] SecurityProblem
 *   }
 * }
 * ```
 * 
 * @class
 */
export
class tfcBindError_ParameterType {
    /**
     * @summary `versions`.
     * @public
     * @readonly
     */
    readonly versions: OPTIONAL<Versions>;
    /**
     * @summary `error`.
     * @public
     * @readonly
     */
    readonly error: tfcBindError_ParameterType_error;

    constructor (
        versions: OPTIONAL<Versions>,
        error: tfcBindError_ParameterType_error
    ) {
        this.versions = versions;
        this.error = error;
    }

    /**
     * @summary Restructures an object into a tfcBindError_ParameterType
     * @description
     * 
     * This takes an `object` and converts it to a `tfcBindError_ParameterType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `tfcBindError_ParameterType`.
     * @returns {tfcBindError_ParameterType}
     */
    public static _from_object (_o: { [_K in keyof (tfcBindError_ParameterType)]: (tfcBindError_ParameterType)[_K] }): tfcBindError_ParameterType {
        return new tfcBindError_ParameterType(_o.versions, _o.error);
    }

    /**
     * @summary Getter that returns the default value for `versions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_versions (): Uint8ClampedArray<ArrayBuffer> { return (() => { const _ret = new Uint8ClampedArray(1); _ret[Versions_v1] = TRUE_BIT;return _ret; })(); }
}

/**
 * @summary The Leading Root Component Types of tfcBindError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_tfcBindError_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec("versions", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("error", false, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of tfcBindError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_tfcBindError_ParameterType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of tfcBindError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_tfcBindError_ParameterType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_tfcBindError_ParameterType: $.ASN1Decoder<tfcBindError_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) tfcBindError_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_tfcBindError_ParameterType (el: _Element): tfcBindError_ParameterType {
    if (!_cached_decoder_for_tfcBindError_ParameterType) { _cached_decoder_for_tfcBindError_ParameterType = function (el: _Element): tfcBindError_ParameterType {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let versions: OPTIONAL<Versions> = tfcBindError_ParameterType._default_value_for_versions;
    let error!: tfcBindError_ParameterType_error;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "versions": (_el: _Element): void => { versions = $._decode_implicit<Versions>(() => _decode_Versions)(_el); },
        "error": (_el: _Element): void => { error = _decode_tfcBindError_ParameterType_error(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_tfcBindError_ParameterType,
        _extension_additions_list_spec_for_tfcBindError_ParameterType,
        _root_component_type_list_2_spec_for_tfcBindError_ParameterType,
        undefined,
    );
    return new tfcBindError_ParameterType( /* SET_CONSTRUCTOR_CALL */
        versions,
        error
    );
}; }
    return _cached_decoder_for_tfcBindError_ParameterType(el);
}

let _cached_encoder_for_tfcBindError_ParameterType: $.ASN1Encoder<tfcBindError_ParameterType> | null = null;

/**
 * @summary Encodes a(n) tfcBindError_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The tfcBindError_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_tfcBindError_ParameterType (value: tfcBindError_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_tfcBindError_ParameterType) { _cached_encoder_for_tfcBindError_ParameterType = function (value: tfcBindError_ParameterType, elGetter: $.ASN1Encoder<tfcBindError_ParameterType>): _Element {
    const _components: _Element[] = [];
    if (value.versions !== undefined && !$.deepEq(value.versions, tfcBindError_ParameterType._default_value_for_versions)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 0, () => _encode_Versions, $.BER)(value.versions, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_tfcBindError_ParameterType_error(value.error, $.BER));
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_tfcBindError_ParameterType(value, elGetter);
}


/* eslint-enable */
