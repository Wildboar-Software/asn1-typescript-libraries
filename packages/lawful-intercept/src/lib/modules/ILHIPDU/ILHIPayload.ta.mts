/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EncapsulationPayload, _decode_EncapsulationPayload, _encode_EncapsulationPayload } from "../ILHIPDU/EncapsulationPayload.ta.mjs";
// export { EncapsulationPayload, _decode_EncapsulationPayload, _encode_EncapsulationPayload } from "../ILHIPDU/EncapsulationPayload.ta.mjs";
import { MappingInfo, _decode_MappingInfo, _encode_MappingInfo } from "../ILHIPDU/MappingInfo.ta.mjs";
// export { MappingInfo, _decode_MappingInfo, _encode_MappingInfo } from "../ILHIPDU/MappingInfo.ta.mjs";


/**
 * @summary ILHIPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ILHIPayload ::= SEQUENCE
 * {
 *     iLHIObjId                [0] OBJECT IDENTIFIER,
 *     resPayload                [1] EncapsulationPayload,
 *     mappingInfo                [2] MappingInfo OPTIONAL,
 *     -- output from the MapF
 *     originalPayload            [3] EncapsulationPayload OPTIONAL,
 *     ...    
 * }
 * ```
 * 
 * @class
 */
export
class ILHIPayload {
    /**
     * @summary `iLHIObjId`.
     * @public
     * @readonly
     */
    readonly iLHIObjId: OBJECT_IDENTIFIER;
    /**
     * @summary `resPayload`.
     * @public
     * @readonly
     */
    readonly resPayload: EncapsulationPayload;
    /**
     * @summary `mappingInfo`.
     * @public
     * @readonly
     */
    readonly mappingInfo: OPTIONAL<MappingInfo>;
    /**
     * @summary `originalPayload`.
     * @public
     * @readonly
     */
    readonly originalPayload: OPTIONAL<EncapsulationPayload>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iLHIObjId: OBJECT_IDENTIFIER,
        resPayload: EncapsulationPayload,
        mappingInfo: OPTIONAL<MappingInfo>,
        originalPayload: OPTIONAL<EncapsulationPayload>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iLHIObjId = iLHIObjId;
        this.resPayload = resPayload;
        this.mappingInfo = mappingInfo;
        this.originalPayload = originalPayload;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ILHIPayload
     * @description
     * 
     * This takes an `object` and converts it to a `ILHIPayload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ILHIPayload`.
     * @returns {ILHIPayload}
     */
    public static _from_object (_o: { [_K in keyof (ILHIPayload)]: (ILHIPayload)[_K] }): ILHIPayload {
        return new ILHIPayload(_o.iLHIObjId, _o.resPayload, _o.mappingInfo, _o.originalPayload, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ILHIPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ILHIPayload: $.ComponentSpec[] = [
    new $.ComponentSpec("iLHIObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("resPayload", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mappingInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("originalPayload", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ILHIPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ILHIPayload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ILHIPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ILHIPayload: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ILHIPayload: $.ASN1Decoder<ILHIPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ILHIPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ILHIPayload (el: _Element): ILHIPayload {
    if (!_cached_decoder_for_ILHIPayload) { _cached_decoder_for_ILHIPayload = function (el: _Element): ILHIPayload {
    let iLHIObjId!: OBJECT_IDENTIFIER;
    let resPayload!: EncapsulationPayload;
    let mappingInfo: OPTIONAL<MappingInfo>;
    let originalPayload: OPTIONAL<EncapsulationPayload>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iLHIObjId": (_el: _Element): void => { iLHIObjId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "resPayload": (_el: _Element): void => { resPayload = $._decode_implicit<EncapsulationPayload>(() => _decode_EncapsulationPayload)(_el); },
        "mappingInfo": (_el: _Element): void => { mappingInfo = $._decode_implicit<MappingInfo>(() => _decode_MappingInfo)(_el); },
        "originalPayload": (_el: _Element): void => { originalPayload = $._decode_implicit<EncapsulationPayload>(() => _decode_EncapsulationPayload)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ILHIPayload,
        _extension_additions_list_spec_for_ILHIPayload,
        _root_component_type_list_2_spec_for_ILHIPayload,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ILHIPayload(
        iLHIObjId,
        resPayload,
        mappingInfo,
        originalPayload,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ILHIPayload(el);
}

let _cached_encoder_for_ILHIPayload: $.ASN1Encoder<ILHIPayload> | null = null;

/**
 * @summary Encodes a(n) ILHIPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ILHIPayload, encoded as an ASN.1 Element.
 */
export
function _encode_ILHIPayload (value: ILHIPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ILHIPayload) { _cached_encoder_for_ILHIPayload = function (value: ILHIPayload, elGetter: $.ASN1Encoder<ILHIPayload>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.iLHIObjId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EncapsulationPayload, $.BER)(value.resPayload, $.BER);
    if (value.mappingInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_MappingInfo, $.BER)(value.mappingInfo, $.BER);
    }
    if (value.originalPayload !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_EncapsulationPayload, $.BER)(value.originalPayload, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ILHIPayload(value, elGetter);
}


/* eslint-enable */
