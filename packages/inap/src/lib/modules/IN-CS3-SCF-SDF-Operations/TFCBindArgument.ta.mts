/* eslint-disable */
import {
    OPTIONAL,
    TRUE_BIT,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../DirectoryAbstractService/Credentials.ta.mjs";
// export { Credentials, _decode_Credentials, _encode_Credentials } from "../DirectoryAbstractService/Credentials.ta.mjs";
import { Versions, Versions_v1 /* IMPORTED_LONG_NAMED_BIT */, _decode_Versions, _encode_Versions } from "../DirectoryAbstractService/Versions.ta.mjs";
// export { Versions, Versions_v1 /* IMPORTED_LONG_NAMED_BIT */, v1 /* IMPORTED_SHORT_NAMED_BIT */, Versions_v2 /* IMPORTED_LONG_NAMED_BIT */, v2 /* IMPORTED_SHORT_NAMED_BIT */, _decode_Versions, _encode_Versions } from "../DirectoryAbstractService/Versions.ta.mjs";


/**
 * @summary TFCBindArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TFCBindArgument ::= SET {
 *   credentials  [0]  Credentials OPTIONAL,
 *   versions     [1] IMPLICIT Versions DEFAULT {v1},
 *   ...,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class TFCBindArgument {
    /**
     * @summary `credentials`.
     * @public
     * @readonly
     */
    readonly credentials: OPTIONAL<Credentials>;
    /**
     * @summary `versions`.
     * @public
     * @readonly
     */
    readonly versions: OPTIONAL<Versions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        credentials?: OPTIONAL<Credentials>,
        versions?: OPTIONAL<Versions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.credentials = credentials;
        this.versions = versions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TFCBindArgument
     * @description
     * 
     * This takes an `object` and converts it to a `TFCBindArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TFCBindArgument`.
     * @returns {TFCBindArgument}
     */
    public static _from_object (_o: { [_K in keyof (TFCBindArgument)]: (TFCBindArgument)[_K] }): TFCBindArgument {
        return new TFCBindArgument(_o.credentials, _o.versions, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `versions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_versions () { return (() => { const _ret = new Uint8ClampedArray(1); _ret[Versions_v1] = TRUE_BIT;return _ret; })(); }
}

/**
 * @summary The Leading Root Component Types of TFCBindArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TFCBindArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("credentials", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("versions", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TFCBindArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TFCBindArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TFCBindArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TFCBindArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TFCBindArgument: $.ASN1Decoder<TFCBindArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TFCBindArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TFCBindArgument (el: _Element): TFCBindArgument {
    if (!_cached_decoder_for_TFCBindArgument) { _cached_decoder_for_TFCBindArgument = function (el: _Element): TFCBindArgument {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let credentials: OPTIONAL<Credentials>;
    let versions: OPTIONAL<Versions> = TFCBindArgument._default_value_for_versions;
    const _unrecognizedExtensionsList: _Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "credentials": (_el: _Element): void => { credentials = $._decode_explicit<Credentials>(() => _decode_Credentials)(_el); },
        "versions": (_el: _Element): void => { versions = $._decode_implicit<Versions>(() => _decode_Versions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_TFCBindArgument,
        _extension_additions_list_spec_for_TFCBindArgument,
        _root_component_type_list_2_spec_for_TFCBindArgument,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new TFCBindArgument( /* SET_CONSTRUCTOR_CALL */
        credentials,
        versions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TFCBindArgument(el);
}

let _cached_encoder_for_TFCBindArgument: $.ASN1Encoder<TFCBindArgument> | null = null;

/**
 * @summary Encodes a(n) TFCBindArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TFCBindArgument, encoded as an ASN.1 Element.
 */
export
function _encode_TFCBindArgument (value: TFCBindArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TFCBindArgument) { _cached_encoder_for_TFCBindArgument = function (value: TFCBindArgument, elGetter: $.ASN1Encoder<TFCBindArgument>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.credentials !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_Credentials, $.BER)(value.credentials, $.BER);
    }
    if (value.versions !== undefined && !$.deepEq(value.versions, TFCBindArgument._default_value_for_versions)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 1, () => _encode_Versions, $.BER)(value.versions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_TFCBindArgument(value, elGetter);
}


/* eslint-enable */
