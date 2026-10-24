/* eslint-disable */
import {
    type OPTIONAL,
    UTCTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BERElement
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-CS3-SSF-SCF-datatypes/ScfID.ta.mjs";
// export { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-CS3-SSF-SCF-datatypes/ScfID.ta.mjs";
import { SubscriberId, _decode_SubscriberId, _encode_SubscriberId } from "../IN-CS3-SCF-SCF-ops-args/SubscriberId.ta.mjs";
// export { SubscriberId, _decode_SubscriberId, _encode_SubscriberId } from "../IN-CS3-SCF-SCF-ops-args/SubscriberId.ta.mjs";
import { TraceInformation, _decode_TraceInformation, _encode_TraceInformation } from "../IN-CS3-SSF-SCF-datatypes/TraceInformation.ta.mjs";
// export { TraceInformation, _decode_TraceInformation, _encode_TraceInformation } from "../IN-CS3-SSF-SCF-datatypes/TraceInformation.ta.mjs";
import { AuthenticationLevel, _decode_AuthenticationLevel, _encode_AuthenticationLevel } from "../BasicAccessControl/AuthenticationLevel.ta.mjs";
// export { AuthenticationLevel, _decode_AuthenticationLevel, _encode_AuthenticationLevel } from "../BasicAccessControl/AuthenticationLevel.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary ChainingArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChainingArgument ::= SEQUENCE {
 *   originatingSCF          [0]  ScfID,
 *   target                  [1]  SubscriberId OPTIONAL,
 *   traceInformation        [2]  TraceInformation,
 *   scfAuthenticationLevel
 *     [3]  AuthenticationLevel DEFAULT basicLevels:{level none},
 *   timeLimit               [4]  UTCTime OPTIONAL,
 *   securityParameters      [5]  SecurityParameters OPTIONAL,
 *   extensions              [6]  Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ChainingArgument {
    /**
     * @summary `originatingSCF`.
     * @public
     * @readonly
     */
    readonly originatingSCF: ScfID;
    /**
     * @summary `target`.
     * @public
     * @readonly
     */
    readonly target: OPTIONAL<SubscriberId>;
    /**
     * @summary `traceInformation`.
     * @public
     * @readonly
     */
    readonly traceInformation: TraceInformation;
    /**
     * @summary `scfAuthenticationLevel`.
     * @public
     * @readonly
     */
    readonly scfAuthenticationLevel: OPTIONAL<AuthenticationLevel>;
    /**
     * @summary `timeLimit`.
     * @public
     * @readonly
     */
    readonly timeLimit: OPTIONAL<UTCTime>;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        originatingSCF: ScfID,
        target: OPTIONAL<SubscriberId>,
        traceInformation: TraceInformation,
        scfAuthenticationLevel?: OPTIONAL<AuthenticationLevel>,
        timeLimit?: OPTIONAL<UTCTime>,
        securityParameters?: OPTIONAL<SecurityParameters>,
        extensions?: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.originatingSCF = originatingSCF;
        this.target = target;
        this.traceInformation = traceInformation;
        this.scfAuthenticationLevel = scfAuthenticationLevel;
        this.timeLimit = timeLimit;
        this.securityParameters = securityParameters;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ChainingArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ChainingArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChainingArgument`.
     * @returns {ChainingArgument}
     */
    public static _from_object (_o: { [_K in keyof (ChainingArgument)]: (ChainingArgument)[_K] }): ChainingArgument {
        return new ChainingArgument(_o.originatingSCF, _o.target, _o.traceInformation, _o.scfAuthenticationLevel, _o.timeLimit, _o.securityParameters, _o.extensions, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `scfAuthenticationLevel`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_scfAuthenticationLevel (): AuthenticationLevel {
        // DEFAULT basicLevels:{level none}
        const el = new BERElement();
        el.fromBytes(new Uint8Array([ 0x30, 0x03, 0x0a, 0x01, 0x00 ]));
        return _decode_AuthenticationLevel(el);
    }
}

/**
 * @summary The Leading Root Component Types of ChainingArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChainingArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("originatingSCF", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("target", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("traceInformation", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("scfAuthenticationLevel", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timeLimit", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of ChainingArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChainingArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChainingArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChainingArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChainingArgument: $.ASN1Decoder<ChainingArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChainingArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChainingArgument (el: _Element): ChainingArgument {
    if (!_cached_decoder_for_ChainingArgument) { _cached_decoder_for_ChainingArgument = function (el: _Element): ChainingArgument {
    let originatingSCF!: ScfID;
    let target: OPTIONAL<SubscriberId>;
    let traceInformation!: TraceInformation;
    let scfAuthenticationLevel: OPTIONAL<AuthenticationLevel> = ChainingArgument._default_value_for_scfAuthenticationLevel;
    let timeLimit: OPTIONAL<UTCTime>;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "originatingSCF": (_el: _Element): void => { originatingSCF = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); },
        "target": (_el: _Element): void => { target = $._decode_implicit<SubscriberId>(() => _decode_SubscriberId)(_el); },
        "traceInformation": (_el: _Element): void => { traceInformation = $._decode_implicit<TraceInformation>(() => _decode_TraceInformation)(_el); },
        "scfAuthenticationLevel": (_el: _Element): void => { scfAuthenticationLevel = $._decode_explicit<AuthenticationLevel>(() => _decode_AuthenticationLevel)(_el); },
        "timeLimit": (_el: _Element): void => { timeLimit = $._decode_implicit<UTCTime>(() => $._decodeUTCTime)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChainingArgument,
        _extension_additions_list_spec_for_ChainingArgument,
        _root_component_type_list_2_spec_for_ChainingArgument,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ChainingArgument(
        originatingSCF,
        target,
        traceInformation,
        scfAuthenticationLevel,
        timeLimit,
        securityParameters,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ChainingArgument(el);
}

let _cached_encoder_for_ChainingArgument: $.ASN1Encoder<ChainingArgument> | null = null;

/**
 * @summary Encodes a(n) ChainingArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChainingArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ChainingArgument (value: ChainingArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChainingArgument) { _cached_encoder_for_ChainingArgument = function (value: ChainingArgument, elGetter: $.ASN1Encoder<ChainingArgument>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ScfID, $.BER)(value.originatingSCF, $.BER);
    if (value.target !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_SubscriberId, $.BER)(value.target, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_TraceInformation, $.BER)(value.traceInformation, $.BER);
    if (value.scfAuthenticationLevel !== undefined && !$.deepEq(value.scfAuthenticationLevel, ChainingArgument._default_value_for_scfAuthenticationLevel)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 3, () => _encode_AuthenticationLevel, $.BER)(value.scfAuthenticationLevel, $.BER);
    }
    if (value.timeLimit !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeUTCTime, $.BER)(value.timeLimit, $.BER);
    }
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ChainingArgument(value, elGetter);
}


/* eslint-enable */
