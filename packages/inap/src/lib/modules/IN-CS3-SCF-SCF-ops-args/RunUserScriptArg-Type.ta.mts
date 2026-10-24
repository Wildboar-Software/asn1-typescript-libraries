/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS3-SSF-SCF-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS3-SSF-SCF-datatypes/CorrelationID.ta.mjs";
import { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-CS3-SSF-SCF-datatypes/ScfID.ta.mjs";
// export { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-CS3-SSF-SCF-datatypes/ScfID.ta.mjs";
import { UserToConnect, _decode_UserToConnect, _encode_UserToConnect, _enum_for_UserToConnect } from "../IN-CS3-SCF-SCF-datatypes/UserToConnect.ta.mjs";
// export { UserToConnect, _enum_for_UserToConnect, UserToConnect_first /* IMPORTED_LONG_ENUMERATION_ITEM */, first /* IMPORTED_SHORT_ENUMERATION_ITEM */, UserToConnect_nofirst /* IMPORTED_LONG_ENUMERATION_ITEM */, nofirst /* IMPORTED_SHORT_ENUMERATION_ITEM */, UserToConnect_newone /* IMPORTED_LONG_ENUMERATION_ITEM */, newone /* IMPORTED_SHORT_ENUMERATION_ITEM */, UserToConnect_previous /* IMPORTED_LONG_ENUMERATION_ITEM */, previous /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UserToConnect, _encode_UserToConnect } from "../IN-CS3-SCF-SCF-datatypes/UserToConnect.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary RunUserScriptArg_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RunUserScriptArg-Type ::=
 * SEQUENCE {
 *   srfAddress [0] CalledPartyNumber,
 *   correlationID [1] CorrelationID,
 *   scfID [2] ScfID,
 *   userToConnect [3] UserToConnect OPTIONAL,
 *   securityParameters [7] SecurityParameters OPTIONAL,
 *   ...,
 *   ...,
 *   extensions [30] Extensions OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RunUserScriptArg_Type {
    /**
     * @summary `srfAddress`.
     * @public
     * @readonly
     */
    readonly srfAddress: CalledPartyNumber;
    /**
     * @summary `correlationID`.
     * @public
     * @readonly
     */
    readonly correlationID: CorrelationID;
    /**
     * @summary `scfID`.
     * @public
     * @readonly
     */
    readonly scfID: ScfID;
    /**
     * @summary `userToConnect`.
     * @public
     * @readonly
     */
    readonly userToConnect: OPTIONAL<UserToConnect>;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters>;
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
        srfAddress: CalledPartyNumber,
        correlationID: CorrelationID,
        scfID: ScfID,
        userToConnect?: OPTIONAL<UserToConnect>,
        securityParameters?: OPTIONAL<SecurityParameters>,
        _unrecognizedExtensionsList: _Element[] = [],
        extensions?: OPTIONAL<Extensions>
    ) {
        this.srfAddress = srfAddress;
        this.correlationID = correlationID;
        this.scfID = scfID;
        this.userToConnect = userToConnect;
        this.securityParameters = securityParameters;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
        this.extensions = extensions;
    }

    /**
     * @summary Restructures an object into a RunUserScriptArg_Type
     * @description
     * 
     * This takes an `object` and converts it to a `RunUserScriptArg_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RunUserScriptArg_Type`.
     * @returns {RunUserScriptArg_Type}
     */
    public static _from_object (_o: { [_K in keyof (RunUserScriptArg_Type)]: (RunUserScriptArg_Type)[_K] }): RunUserScriptArg_Type {
        return new RunUserScriptArg_Type(_o.srfAddress, _o.correlationID, _o.scfID, _o.userToConnect, _o.securityParameters, _o._unrecognizedExtensionsList, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `userToConnect`
         * @public
         * @static
         */

    public static _enum_for_userToConnect = _enum_for_UserToConnect;
}

/**
 * @summary The Leading Root Component Types of RunUserScriptArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RunUserScriptArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("srfAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("correlationID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("scfID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("userToConnect", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of RunUserScriptArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RunUserScriptArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Extension Addition Component Types of RunUserScriptArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RunUserScriptArg_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RunUserScriptArg_Type: $.ASN1Decoder<RunUserScriptArg_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RunUserScriptArg_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RunUserScriptArg_Type (el: _Element): RunUserScriptArg_Type {
    if (!_cached_decoder_for_RunUserScriptArg_Type) { _cached_decoder_for_RunUserScriptArg_Type = function (el: _Element): RunUserScriptArg_Type {
    let srfAddress!: CalledPartyNumber;
    let correlationID!: CorrelationID;
    let scfID!: ScfID;
    let userToConnect: OPTIONAL<UserToConnect>;
    let securityParameters: OPTIONAL<SecurityParameters>;
    const _unrecognizedExtensionsList: _Element[] = [];
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "srfAddress": (_el: _Element): void => { srfAddress = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "scfID": (_el: _Element): void => { scfID = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); },
        "userToConnect": (_el: _Element): void => { userToConnect = $._decode_implicit<UserToConnect>(() => _decode_UserToConnect)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RunUserScriptArg_Type,
        _extension_additions_list_spec_for_RunUserScriptArg_Type,
        _root_component_type_list_2_spec_for_RunUserScriptArg_Type,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RunUserScriptArg_Type(
        srfAddress,
        correlationID,
        scfID,
        userToConnect,
        securityParameters,
        _unrecognizedExtensionsList,
        extensions
    );
}; }
    return _cached_decoder_for_RunUserScriptArg_Type(el);
}

let _cached_encoder_for_RunUserScriptArg_Type: $.ASN1Encoder<RunUserScriptArg_Type> | null = null;

/**
 * @summary Encodes a(n) RunUserScriptArg_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RunUserScriptArg_Type, encoded as an ASN.1 Element.
 */
export
function _encode_RunUserScriptArg_Type (value: RunUserScriptArg_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RunUserScriptArg_Type) { _cached_encoder_for_RunUserScriptArg_Type = function (value: RunUserScriptArg_Type, elGetter: $.ASN1Encoder<RunUserScriptArg_Type>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CalledPartyNumber, $.BER)(value.srfAddress, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ScfID, $.BER)(value.scfID, $.BER);
    if (value.userToConnect !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_UserToConnect, $.BER)(value.userToConnect, $.BER);
    }
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
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
    return _cached_encoder_for_RunUserScriptArg_Type(value, elGetter);
}


/* eslint-enable */
