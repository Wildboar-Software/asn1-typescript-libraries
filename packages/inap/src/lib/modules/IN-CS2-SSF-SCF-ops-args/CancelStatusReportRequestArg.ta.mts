/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../IN-CS2-datatypes/ResourceID.ta.mjs";
// export { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../IN-CS2-datatypes/ResourceID.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";


/**
 * @summary CancelStatusReportRequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelStatusReportRequestArg ::= SEQUENCE {
 *   resourceID  [0]  ResourceID OPTIONAL,
 *   extensions
 *     [1]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class CancelStatusReportRequestArg {
    /**
     * @summary `resourceID`.
     * @public
     * @readonly
     */
    readonly resourceID: OPTIONAL<ResourceID>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<ExtensionField[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        resourceID?: OPTIONAL<ResourceID>,
        extensions?: OPTIONAL<ExtensionField[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.resourceID = resourceID;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CancelStatusReportRequestArg
     * @description
     * 
     * This takes an `object` and converts it to a `CancelStatusReportRequestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CancelStatusReportRequestArg`.
     * @returns {CancelStatusReportRequestArg}
     */
    public static _from_object (_o: { [_K in keyof (CancelStatusReportRequestArg)]: (CancelStatusReportRequestArg)[_K] }): CancelStatusReportRequestArg {
        return new CancelStatusReportRequestArg(_o.resourceID, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CancelStatusReportRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CancelStatusReportRequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("resourceID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CancelStatusReportRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CancelStatusReportRequestArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CancelStatusReportRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CancelStatusReportRequestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CancelStatusReportRequestArg: $.ASN1Decoder<CancelStatusReportRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelStatusReportRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelStatusReportRequestArg (el: _Element): CancelStatusReportRequestArg {
    if (!_cached_decoder_for_CancelStatusReportRequestArg) { _cached_decoder_for_CancelStatusReportRequestArg = function (el: _Element): CancelStatusReportRequestArg {
    let resourceID: OPTIONAL<ResourceID>;
    let extensions: OPTIONAL<ExtensionField[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "resourceID": (_el: _Element): void => { resourceID = $._decode_explicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CancelStatusReportRequestArg,
        _extension_additions_list_spec_for_CancelStatusReportRequestArg,
        _root_component_type_list_2_spec_for_CancelStatusReportRequestArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CancelStatusReportRequestArg(
        resourceID,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CancelStatusReportRequestArg(el);
}

let _cached_encoder_for_CancelStatusReportRequestArg: $.ASN1Encoder<CancelStatusReportRequestArg> | null = null;

/**
 * @summary Encodes a(n) CancelStatusReportRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelStatusReportRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_CancelStatusReportRequestArg (value: CancelStatusReportRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelStatusReportRequestArg) { _cached_encoder_for_CancelStatusReportRequestArg = function (value: CancelStatusReportRequestArg, elGetter: $.ASN1Encoder<CancelStatusReportRequestArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.resourceID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_ResourceID, $.BER)(value.resourceID, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CancelStatusReportRequestArg(value, elGetter);
}


/* eslint-enable */
