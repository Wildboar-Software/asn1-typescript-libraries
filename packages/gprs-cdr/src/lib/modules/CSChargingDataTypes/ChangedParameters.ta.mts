/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChangedParameters_changeFlags, _decode_ChangedParameters_changeFlags, _encode_ChangedParameters_changeFlags } from "../CSChargingDataTypes/ChangedParameters-changeFlags.ta.mjs";
import { CAMELModificationParameters, _decode_CAMELModificationParameters, _encode_CAMELModificationParameters } from "../CSChargingDataTypes/CAMELModificationParameters.ta.mjs";


/**
 * @summary ChangedParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangedParameters ::= SET {
 *    changeFlags   [0] IMPLICIT BIT STRING {
 *       callingPartyNumberModified  (0 ),
 *       callingPartyCategoryModified  (1 ),
 *       originalCalledPartyNumberModified  (2 ),
 *       genericNumbersModified  (3 ),
 *       redirectingPartyNumberModified  (4 ),
 *       redirectionCounterModified  (5 )},
 *    changeList    [1] IMPLICIT CAMELModificationParameters OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ChangedParameters {
    /**
     * @summary `changeFlags`.
     * @public
     * @readonly
     */
    readonly changeFlags: ChangedParameters_changeFlags;
    /**
     * @summary `changeList`.
     * @public
     * @readonly
     */
    readonly changeList: OPTIONAL<CAMELModificationParameters>;

    constructor (
        changeFlags: ChangedParameters_changeFlags,
        changeList: OPTIONAL<CAMELModificationParameters>
    ) {
        this.changeFlags = changeFlags;
        this.changeList = changeList;
    }

    /**
     * @summary Restructures an object into a ChangedParameters
     * @description
     * 
     * This takes an `object` and converts it to a `ChangedParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangedParameters`.
     * @returns {ChangedParameters}
     */
    public static _from_object (_o: { [_K in keyof (ChangedParameters)]: (ChangedParameters)[_K] }): ChangedParameters {
        return new ChangedParameters(_o.changeFlags, _o.changeList);
    }


}

/**
 * @summary The Leading Root Component Types of ChangedParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangedParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("changeFlags", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("changeList", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ChangedParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangedParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangedParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangedParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangedParameters: $.ASN1Decoder<ChangedParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangedParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangedParameters (el: _Element): ChangedParameters {
    if (!_cached_decoder_for_ChangedParameters) { _cached_decoder_for_ChangedParameters = function (el: _Element): ChangedParameters {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let changeFlags!: ChangedParameters_changeFlags;
    let changeList: OPTIONAL<CAMELModificationParameters>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "changeFlags": (_el: _Element): void => { changeFlags = $._decode_implicit<ChangedParameters_changeFlags>(() => _decode_ChangedParameters_changeFlags)(_el); },
        "changeList": (_el: _Element): void => { changeList = $._decode_implicit<CAMELModificationParameters>(() => _decode_CAMELModificationParameters)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ChangedParameters,
        _extension_additions_list_spec_for_ChangedParameters,
        _root_component_type_list_2_spec_for_ChangedParameters,
        undefined,
    );
    return new ChangedParameters( /* SET_CONSTRUCTOR_CALL */
        changeFlags,
        changeList
    );
}; }
    return _cached_decoder_for_ChangedParameters(el);
}

let _cached_encoder_for_ChangedParameters: $.ASN1Encoder<ChangedParameters> | null = null;

/**
 * @summary Encodes a(n) ChangedParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangedParameters, encoded as an ASN.1 Element.
 */
export
function _encode_ChangedParameters (value: ChangedParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangedParameters) { _cached_encoder_for_ChangedParameters = function (value: ChangedParameters, _elGetter: $.ASN1Encoder<ChangedParameters>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ChangedParameters_changeFlags, $.BER)(value.changeFlags, $.BER));
    if (value.changeList !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CAMELModificationParameters, $.BER)(value.changeList, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ChangedParameters(value, elGetter);
}


/* eslint-enable */
