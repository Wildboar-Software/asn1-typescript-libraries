/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { INprofile, _decode_INprofile, _encode_INprofile } from "../IN-CS3-SSF-SCF-datatypes/INprofile.ta.mjs";
// export { INprofile, _decode_INprofile, _encode_INprofile } from "../IN-CS3-SSF-SCF-datatypes/INprofile.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary SetServiceProfileArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetServiceProfileArg ::= SEQUENCE {
 *   iNprofiles
 *     [0]  SEQUENCE OF INprofile,
 *   ...,
 *   ...,
 *   extensions  [30]  Extensions OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SetServiceProfileArg {
    /**
     * @summary `iNprofiles`.
     * @public
     * @readonly
     */
    readonly iNprofiles: INprofile[];
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
        iNprofiles: INprofile[],
        _unrecognizedExtensionsList: _Element[] = [],
        extensions?: OPTIONAL<Extensions>
    ) {
        this.iNprofiles = iNprofiles;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
        this.extensions = extensions;
    }

    /**
     * @summary Restructures an object into a SetServiceProfileArg
     * @description
     * 
     * This takes an `object` and converts it to a `SetServiceProfileArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetServiceProfileArg`.
     * @returns {SetServiceProfileArg}
     */
    public static _from_object (_o: { [_K in keyof (SetServiceProfileArg)]: (SetServiceProfileArg)[_K] }): SetServiceProfileArg {
        return new SetServiceProfileArg(_o.iNprofiles, _o._unrecognizedExtensionsList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SetServiceProfileArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetServiceProfileArg: $.ComponentSpec[] = [
    new $.ComponentSpec("iNprofiles", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of SetServiceProfileArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetServiceProfileArg: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Extension Addition Component Types of SetServiceProfileArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetServiceProfileArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetServiceProfileArg: $.ASN1Decoder<SetServiceProfileArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetServiceProfileArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetServiceProfileArg (el: _Element): SetServiceProfileArg {
    if (!_cached_decoder_for_SetServiceProfileArg) { _cached_decoder_for_SetServiceProfileArg = function (el: _Element): SetServiceProfileArg {
    let iNprofiles!: INprofile[];
    const _unrecognizedExtensionsList: _Element[] = [];
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "iNprofiles": (_el: _Element): void => { iNprofiles = $._decode_implicit<INprofile[]>(() => $._decodeSequenceOf<INprofile>(() => _decode_INprofile))(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetServiceProfileArg,
        _extension_additions_list_spec_for_SetServiceProfileArg,
        _root_component_type_list_2_spec_for_SetServiceProfileArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SetServiceProfileArg(
        iNprofiles,
        _unrecognizedExtensionsList,
        extensions
    );
}; }
    return _cached_decoder_for_SetServiceProfileArg(el);
}

let _cached_encoder_for_SetServiceProfileArg: $.ASN1Encoder<SetServiceProfileArg> | null = null;

/**
 * @summary Encodes a(n) SetServiceProfileArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetServiceProfileArg, encoded as an ASN.1 Element.
 */
export
function _encode_SetServiceProfileArg (value: SetServiceProfileArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetServiceProfileArg) { _cached_encoder_for_SetServiceProfileArg = function (value: SetServiceProfileArg, elGetter: $.ASN1Encoder<SetServiceProfileArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<INprofile>(() => _encode_INprofile, $.BER), $.BER)(value.iNprofiles, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SetServiceProfileArg(value, elGetter);
}


/* eslint-enable */
