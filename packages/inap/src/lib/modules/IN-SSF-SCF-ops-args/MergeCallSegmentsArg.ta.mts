/* eslint-disable */
import {
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
import { initialCallSegment } from "../IN-SSF-SCF-datatypes/initialCallSegment.va.mjs";
// export { initialCallSegment } from "../IN-SSF-SCF-datatypes/initialCallSegment.va.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary MergeCallSegmentsArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MergeCallSegmentsArg ::= SEQUENCE {
 *   sourceCallSegment        [0]  CallSegmentID,
 *   targetCallSegment        [1]  CallSegmentID DEFAULT initialCallSegment,
 *   extensions               [2]  Extensions OPTIONAL,
 *   ...,
 *   mergeSignallingPaths     [3]  NULL OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MergeCallSegmentsArg {
    /**
     * @summary `sourceCallSegment`.
     * @public
     * @readonly
     */
    readonly sourceCallSegment: CallSegmentID;
    /**
     * @summary `targetCallSegment`.
     * @public
     * @readonly
     */
    readonly targetCallSegment: OPTIONAL<CallSegmentID>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `mergeSignallingPaths`.
     * @public
     * @readonly
     */
    readonly mergeSignallingPaths: OPTIONAL<NULL>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sourceCallSegment: CallSegmentID,
        targetCallSegment?: OPTIONAL<CallSegmentID>,
        extensions?: OPTIONAL<Extensions>,
        mergeSignallingPaths?: OPTIONAL<NULL>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sourceCallSegment = sourceCallSegment;
        this.targetCallSegment = targetCallSegment;
        this.extensions = extensions;
        this.mergeSignallingPaths = mergeSignallingPaths;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MergeCallSegmentsArg
     * @description
     * 
     * This takes an `object` and converts it to a `MergeCallSegmentsArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MergeCallSegmentsArg`.
     * @returns {MergeCallSegmentsArg}
     */
    public static _from_object (_o: { [_K in keyof (MergeCallSegmentsArg)]: (MergeCallSegmentsArg)[_K] }): MergeCallSegmentsArg {
        return new MergeCallSegmentsArg(_o.sourceCallSegment, _o.targetCallSegment, _o.extensions, _o.mergeSignallingPaths, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `targetCallSegment`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_targetCallSegment () { return initialCallSegment; }
}

/**
 * @summary The Leading Root Component Types of MergeCallSegmentsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MergeCallSegmentsArg: $.ComponentSpec[] = [
    new $.ComponentSpec("sourceCallSegment", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("targetCallSegment", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MergeCallSegmentsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MergeCallSegmentsArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MergeCallSegmentsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MergeCallSegmentsArg: $.ComponentSpec[] = [
    new $.ComponentSpec("mergeSignallingPaths", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_MergeCallSegmentsArg: $.ASN1Decoder<MergeCallSegmentsArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MergeCallSegmentsArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MergeCallSegmentsArg (el: _Element): MergeCallSegmentsArg {
    if (!_cached_decoder_for_MergeCallSegmentsArg) { _cached_decoder_for_MergeCallSegmentsArg = function (el: _Element): MergeCallSegmentsArg {
    let sourceCallSegment!: CallSegmentID;
    let targetCallSegment: OPTIONAL<CallSegmentID> = MergeCallSegmentsArg._default_value_for_targetCallSegment;
    let extensions: OPTIONAL<Extensions>;
    let mergeSignallingPaths: OPTIONAL<NULL>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sourceCallSegment": (_el: _Element): void => { sourceCallSegment = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "targetCallSegment": (_el: _Element): void => { targetCallSegment = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "mergeSignallingPaths": (_el: _Element): void => { mergeSignallingPaths = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MergeCallSegmentsArg,
        _extension_additions_list_spec_for_MergeCallSegmentsArg,
        _root_component_type_list_2_spec_for_MergeCallSegmentsArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MergeCallSegmentsArg(
        sourceCallSegment,
        targetCallSegment,
        extensions,
        mergeSignallingPaths,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MergeCallSegmentsArg(el);
}

let _cached_encoder_for_MergeCallSegmentsArg: $.ASN1Encoder<MergeCallSegmentsArg> | null = null;

/**
 * @summary Encodes a(n) MergeCallSegmentsArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MergeCallSegmentsArg, encoded as an ASN.1 Element.
 */
export
function _encode_MergeCallSegmentsArg (value: MergeCallSegmentsArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MergeCallSegmentsArg) { _cached_encoder_for_MergeCallSegmentsArg = function (value: MergeCallSegmentsArg, elGetter: $.ASN1Encoder<MergeCallSegmentsArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CallSegmentID, $.BER)(value.sourceCallSegment, $.BER);
    if (value.targetCallSegment !== undefined && !$.deepEq(value.targetCallSegment, MergeCallSegmentsArg._default_value_for_targetCallSegment)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 1, () => _encode_CallSegmentID, $.BER)(value.targetCallSegment, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.mergeSignallingPaths !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.mergeSignallingPaths, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MergeCallSegmentsArg(value, elGetter);
}


/* eslint-enable */
