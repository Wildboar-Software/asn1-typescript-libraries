/* eslint-disable */
import {
    type BOOLEAN,
    type INTEGER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";


/**
 * @summary ReleaseCallArg_callSegmentToRelease
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReleaseCallArg-callSegmentToRelease ::=
 * SEQUENCE {
 *   callSegment [0] INTEGER,
 *   releaseCause [1] Cause OPTIONAL,
 *   forcedRelease [2] BOOLEAN DEFAULT FALSE,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ReleaseCallArg_callSegmentToRelease {
    /**
     * @summary `callSegment`.
     * @public
     * @readonly
     */
    readonly callSegment: INTEGER;
    /**
     * @summary `releaseCause`.
     * @public
     * @readonly
     */
    readonly releaseCause: OPTIONAL<Cause>;
    /**
     * @summary `forcedRelease`.
     * @public
     * @readonly
     */
    readonly forcedRelease: OPTIONAL<BOOLEAN>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        callSegment: INTEGER,
        releaseCause?: OPTIONAL<Cause>,
        forcedRelease?: OPTIONAL<BOOLEAN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.callSegment = callSegment;
        this.releaseCause = releaseCause;
        this.forcedRelease = forcedRelease;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ReleaseCallArg_callSegmentToRelease
     * @description
     * 
     * This takes an `object` and converts it to a `ReleaseCallArg_callSegmentToRelease`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReleaseCallArg_callSegmentToRelease`.
     * @returns {ReleaseCallArg_callSegmentToRelease}
     */
    public static _from_object (_o: { [_K in keyof (ReleaseCallArg_callSegmentToRelease)]: (ReleaseCallArg_callSegmentToRelease)[_K] }): ReleaseCallArg_callSegmentToRelease {
        return new ReleaseCallArg_callSegmentToRelease(_o.callSegment, _o.releaseCause, _o.forcedRelease, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `forcedRelease`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_forcedRelease () { return false; }
}

/**
 * @summary The Leading Root Component Types of ReleaseCallArg_callSegmentToRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReleaseCallArg_callSegmentToRelease: $.ComponentSpec[] = [
    new $.ComponentSpec("callSegment", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("releaseCause", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("forcedRelease", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ReleaseCallArg_callSegmentToRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReleaseCallArg_callSegmentToRelease: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReleaseCallArg_callSegmentToRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReleaseCallArg_callSegmentToRelease: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReleaseCallArg_callSegmentToRelease: $.ASN1Decoder<ReleaseCallArg_callSegmentToRelease> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseCallArg_callSegmentToRelease
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReleaseCallArg_callSegmentToRelease (el: _Element): ReleaseCallArg_callSegmentToRelease {
    if (!_cached_decoder_for_ReleaseCallArg_callSegmentToRelease) { _cached_decoder_for_ReleaseCallArg_callSegmentToRelease = function (el: _Element): ReleaseCallArg_callSegmentToRelease {
    let callSegment!: INTEGER;
    let releaseCause: OPTIONAL<Cause>;
    let forcedRelease: OPTIONAL<BOOLEAN> = ReleaseCallArg_callSegmentToRelease._default_value_for_forcedRelease;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "callSegment": (_el: _Element): void => { callSegment = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); },
        "forcedRelease": (_el: _Element): void => { forcedRelease = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReleaseCallArg_callSegmentToRelease,
        _extension_additions_list_spec_for_ReleaseCallArg_callSegmentToRelease,
        _root_component_type_list_2_spec_for_ReleaseCallArg_callSegmentToRelease,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ReleaseCallArg_callSegmentToRelease(
        callSegment,
        releaseCause,
        forcedRelease,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ReleaseCallArg_callSegmentToRelease(el);
}

let _cached_encoder_for_ReleaseCallArg_callSegmentToRelease: $.ASN1Encoder<ReleaseCallArg_callSegmentToRelease> | null = null;

/**
 * @summary Encodes a(n) ReleaseCallArg_callSegmentToRelease into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseCallArg_callSegmentToRelease, encoded as an ASN.1 Element.
 */
export
function _encode_ReleaseCallArg_callSegmentToRelease (value: ReleaseCallArg_callSegmentToRelease, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReleaseCallArg_callSegmentToRelease) { _cached_encoder_for_ReleaseCallArg_callSegmentToRelease = function (value: ReleaseCallArg_callSegmentToRelease, elGetter: $.ASN1Encoder<ReleaseCallArg_callSegmentToRelease>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.callSegment, $.BER);
    if (value.releaseCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Cause, $.BER)(value.releaseCause, $.BER);
    }
    if (value.forcedRelease !== undefined && !$.deepEq(value.forcedRelease, ReleaseCallArg_callSegmentToRelease._default_value_for_forcedRelease)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.forcedRelease, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ReleaseCallArg_callSegmentToRelease(value, elGetter);
}


/* eslint-enable */
