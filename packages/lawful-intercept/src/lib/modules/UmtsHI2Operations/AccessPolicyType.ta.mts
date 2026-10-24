/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type BOOLEAN,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessPolicyType
 * @description
 * 
 * Which access-control list a PTC target managed or queried, and the network
 * result, on a PTC access-policy report.
 * 
 * Clause 17.2.18 treats the six items as alternatives. Annex B.3 encodes them
 * together. Each boolean defaults to false; true means the target has accessed
 * that list. An unsuccessful request is not one of these components.
 * 
 * 3GPP TS 33.108, clause 17.2.18 and annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessPolicyType ::= SEQUENCE
 * {
 *     userAccessPolicyAttempt             [1] BOOLEAN,
 *     -- default False, true indicates Target has accessed.
 *     groupAuthorizationRulesAttempt        [2] BOOLEAN,
 *     -- default False, true indicates Target has accessed.
 *     userAccessPolicyQuery                [3] BOOLEAN,
 *     -- default False, true indicates Target has accessed.
 *     groupAuthorizationRulesQuery        [4] BOOLEAN,
 *     -- default False, true indicates Target has accessed.
 *     userAccessPolicyResult                [5] UTF8String,
 *     groupAuthorizationRulesResult        [6] UTF8String,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class AccessPolicyType {
    /**
     * @summary `userAccessPolicyAttempt`.
     * @description
     * 
     * True when the target has accessed the PTC user access policy. Annex B.3
     * defaults this to false.
     * 
     * Table 17.2.18 reports the attempt when the target changes or queries the
     * access-control lists.
     * 
     * 3GPP TS 33.108, clause 17.2.18 and annex B.3.
     * @public
     * @readonly
     */
    readonly userAccessPolicyAttempt: BOOLEAN;
    /**
     * @summary `groupAuthorizationRulesAttempt`.
     * @description
     * 
     * True when the target has accessed the PTC group authorization rules.
     * Annex B.3 defaults this to false.
     * 
     * Table 17.2.18 reports the attempt when the target changes or queries
     * those rules.
     * 
     * 3GPP TS 33.108, clause 17.2.18 and annex B.3.
     * @public
     * @readonly
     */
    readonly groupAuthorizationRulesAttempt: BOOLEAN;
    /**
     * @summary `userAccessPolicyQuery`.
     * @description
     * 
     * True when the target has queried the PTC user access policy. Annex B.3
     * uses the same rule as the attempt flag: default false, and true means the
     * target has accessed it.
     * 
     * 3GPP TS 33.108, table 17.2.18 and annex B.3.
     * @public
     * @readonly
     */
    readonly userAccessPolicyQuery: BOOLEAN;
    /**
     * @summary `groupAuthorizationRulesQuery`.
     * @description
     * 
     * True when the target has queried the PTC group authorization rules. Annex
     * B.3 defaults this to false; true means the target has accessed them.
     * 
     * 3GPP TS 33.108, table 17.2.18 and annex B.3.
     * @public
     * @readonly
     */
    readonly groupAuthorizationRulesQuery: BOOLEAN;
    /**
     * @summary `userAccessPolicyResult`.
     * @description
     * 
     * Result the network returns for the user access policy. Table 17.2.18
     * reports it when the network notifies the target of a change to the
     * access-control lists. Annex B.3 does not define the string.
     * 
     * 3GPP TS 33.108, clause 17.2.18.
     * @public
     * @readonly
     */
    readonly userAccessPolicyResult: UTF8String;
    /**
     * @summary `groupAuthorizationRulesResult`.
     * @description
     * 
     * Result the network returns for the group authorization rules. Table
     * 17.2.18 reports it when the network notifies the target of a change to
     * those rules. Annex B.3 does not define the string.
     * 
     * 3GPP TS 33.108, clause 17.2.18.
     * @public
     * @readonly
     */
    readonly groupAuthorizationRulesResult: UTF8String;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of annex B.3 does not define. They
     * are retained so a later addition on HI2 is not dropped.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        userAccessPolicyAttempt: BOOLEAN,
        groupAuthorizationRulesAttempt: BOOLEAN,
        userAccessPolicyQuery: BOOLEAN,
        groupAuthorizationRulesQuery: BOOLEAN,
        userAccessPolicyResult: UTF8String,
        groupAuthorizationRulesResult: UTF8String,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.userAccessPolicyAttempt = userAccessPolicyAttempt;
        this.groupAuthorizationRulesAttempt = groupAuthorizationRulesAttempt;
        this.userAccessPolicyQuery = userAccessPolicyQuery;
        this.groupAuthorizationRulesQuery = groupAuthorizationRulesQuery;
        this.userAccessPolicyResult = userAccessPolicyResult;
        this.groupAuthorizationRulesResult = groupAuthorizationRulesResult;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AccessPolicyType
     * @description
     * 
     * This takes an `object` and converts it to a `AccessPolicyType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessPolicyType`.
     * @returns {AccessPolicyType}
     */
    public static _from_object (_o: { [_K in keyof (AccessPolicyType)]: (AccessPolicyType)[_K] }): AccessPolicyType {
        return new AccessPolicyType(_o.userAccessPolicyAttempt, _o.groupAuthorizationRulesAttempt, _o.userAccessPolicyQuery, _o.groupAuthorizationRulesQuery, _o.userAccessPolicyResult, _o.groupAuthorizationRulesResult, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AccessPolicyType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccessPolicyType: $.ComponentSpec[] = [
    new $.ComponentSpec("userAccessPolicyAttempt", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("groupAuthorizationRulesAttempt", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("userAccessPolicyQuery", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("groupAuthorizationRulesQuery", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("userAccessPolicyResult", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("groupAuthorizationRulesResult", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of AccessPolicyType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccessPolicyType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccessPolicyType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccessPolicyType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccessPolicyType: $.ASN1Decoder<AccessPolicyType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessPolicyType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessPolicyType (el: _Element): AccessPolicyType {
    if (!_cached_decoder_for_AccessPolicyType) { _cached_decoder_for_AccessPolicyType = function (el: _Element): AccessPolicyType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("AccessPolicyType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "userAccessPolicyAttempt";
    sequence[1].name = "groupAuthorizationRulesAttempt";
    sequence[2].name = "userAccessPolicyQuery";
    sequence[3].name = "groupAuthorizationRulesQuery";
    sequence[4].name = "userAccessPolicyResult";
    sequence[5].name = "groupAuthorizationRulesResult";
    let userAccessPolicyAttempt!: BOOLEAN;
    let groupAuthorizationRulesAttempt!: BOOLEAN;
    let userAccessPolicyQuery!: BOOLEAN;
    let groupAuthorizationRulesQuery!: BOOLEAN;
    let userAccessPolicyResult!: UTF8String;
    let groupAuthorizationRulesResult!: UTF8String;
    userAccessPolicyAttempt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[0]);
    groupAuthorizationRulesAttempt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[1]);
    userAccessPolicyQuery = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[2]);
    groupAuthorizationRulesQuery = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[3]);
    userAccessPolicyResult = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[4]);
    groupAuthorizationRulesResult = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[5]);
    return new AccessPolicyType(
        userAccessPolicyAttempt,
        groupAuthorizationRulesAttempt,
        userAccessPolicyQuery,
        groupAuthorizationRulesQuery,
        userAccessPolicyResult,
        groupAuthorizationRulesResult,
        sequence.slice(6),
    );
}; }
    return _cached_decoder_for_AccessPolicyType(el);
}

let _cached_encoder_for_AccessPolicyType: $.ASN1Encoder<AccessPolicyType> | null = null;

/**
 * @summary Encodes a(n) AccessPolicyType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessPolicyType, encoded as an ASN.1 Element.
 */
export
function _encode_AccessPolicyType (value: AccessPolicyType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessPolicyType) { _cached_encoder_for_AccessPolicyType = function (value: AccessPolicyType, elGetter: $.ASN1Encoder<AccessPolicyType>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.userAccessPolicyAttempt, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.groupAuthorizationRulesAttempt, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.userAccessPolicyQuery, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.groupAuthorizationRulesQuery, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.userAccessPolicyResult, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.groupAuthorizationRulesResult, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AccessPolicyType(value, elGetter);
}


/* eslint-enable */
