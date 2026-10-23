/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";
import { TimerValue, _decode_TimerValue, _encode_TimerValue } from "../IN-SSF-SCF-datatypes/TimerValue.ta.mjs";
// export { TimerValue, _decode_TimerValue, _encode_TimerValue } from "../IN-SSF-SCF-datatypes/TimerValue.ta.mjs";


/**
 * @summary ReleaseCallArg_allCallSegments
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReleaseCallArg-allCallSegments ::=
 * SEQUENCE {
 *   releaseCause [0] Cause OPTIONAL,
 *   timeToRelease [1] TimerValue OPTIONAL,
 *   forcedRelease [2] BOOLEAN DEFAULT FALSE,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ReleaseCallArg_allCallSegments {
    /**
     * @summary `releaseCause`.
     * @public
     * @readonly
     */
    readonly releaseCause: OPTIONAL<Cause>;
    /**
     * @summary `timeToRelease`.
     * @public
     * @readonly
     */
    readonly timeToRelease: OPTIONAL<TimerValue>;
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
        releaseCause?: OPTIONAL<Cause>,
        timeToRelease?: OPTIONAL<TimerValue>,
        forcedRelease?: OPTIONAL<BOOLEAN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.releaseCause = releaseCause;
        this.timeToRelease = timeToRelease;
        this.forcedRelease = forcedRelease;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ReleaseCallArg_allCallSegments
     * @description
     * 
     * This takes an `object` and converts it to a `ReleaseCallArg_allCallSegments`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReleaseCallArg_allCallSegments`.
     * @returns {ReleaseCallArg_allCallSegments}
     */
    public static _from_object (_o: { [_K in keyof (ReleaseCallArg_allCallSegments)]: (ReleaseCallArg_allCallSegments)[_K] }): ReleaseCallArg_allCallSegments {
        return new ReleaseCallArg_allCallSegments(_o.releaseCause, _o.timeToRelease, _o.forcedRelease, _o._unrecognizedExtensionsList);
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
 * @summary The Leading Root Component Types of ReleaseCallArg_allCallSegments
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReleaseCallArg_allCallSegments: $.ComponentSpec[] = [
    new $.ComponentSpec("releaseCause", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timeToRelease", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("forcedRelease", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ReleaseCallArg_allCallSegments
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReleaseCallArg_allCallSegments: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReleaseCallArg_allCallSegments
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReleaseCallArg_allCallSegments: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReleaseCallArg_allCallSegments: $.ASN1Decoder<ReleaseCallArg_allCallSegments> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseCallArg_allCallSegments
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReleaseCallArg_allCallSegments (el: _Element): ReleaseCallArg_allCallSegments {
    if (!_cached_decoder_for_ReleaseCallArg_allCallSegments) { _cached_decoder_for_ReleaseCallArg_allCallSegments = function (el: _Element): ReleaseCallArg_allCallSegments {
    let releaseCause: OPTIONAL<Cause>;
    let timeToRelease: OPTIONAL<TimerValue>;
    let forcedRelease: OPTIONAL<BOOLEAN> = ReleaseCallArg_allCallSegments._default_value_for_forcedRelease;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); },
        "timeToRelease": (_el: _Element): void => { timeToRelease = $._decode_implicit<TimerValue>(() => _decode_TimerValue)(_el); },
        "forcedRelease": (_el: _Element): void => { forcedRelease = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReleaseCallArg_allCallSegments,
        _extension_additions_list_spec_for_ReleaseCallArg_allCallSegments,
        _root_component_type_list_2_spec_for_ReleaseCallArg_allCallSegments,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ReleaseCallArg_allCallSegments(
        releaseCause,
        timeToRelease,
        forcedRelease,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ReleaseCallArg_allCallSegments(el);
}

let _cached_encoder_for_ReleaseCallArg_allCallSegments: $.ASN1Encoder<ReleaseCallArg_allCallSegments> | null = null;

/**
 * @summary Encodes a(n) ReleaseCallArg_allCallSegments into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseCallArg_allCallSegments, encoded as an ASN.1 Element.
 */
export
function _encode_ReleaseCallArg_allCallSegments (value: ReleaseCallArg_allCallSegments, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReleaseCallArg_allCallSegments) { _cached_encoder_for_ReleaseCallArg_allCallSegments = function (value: ReleaseCallArg_allCallSegments, elGetter: $.ASN1Encoder<ReleaseCallArg_allCallSegments>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.releaseCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.releaseCause, $.BER);
    }
    if (value.timeToRelease !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_TimerValue, $.BER)(value.timeToRelease, $.BER);
    }
    if (value.forcedRelease !== undefined && !$.deepEq(value.forcedRelease, ReleaseCallArg_allCallSegments._default_value_for_forcedRelease)) {
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
    return _cached_encoder_for_ReleaseCallArg_allCallSegments(value, elGetter);
}


/* eslint-enable */
