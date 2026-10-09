/* eslint-disable */
import {
    EXTERNAL,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { ProtocolVersion, _decode_ProtocolVersion, _encode_ProtocolVersion } from "../Z39-50-APDU-2001/ProtocolVersion.ta.mjs";
import { Options, _decode_Options, _encode_Options } from "../Z39-50-APDU-2001/Options.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary InitializeRequest
 * @description
 *
 * Client request of the Init service. Proposes initialization
 * parameters. The values in the server response are the ones in
 * effect for the Z-association. If the server accepts and the client
 * will not use those values, the client may Close and try Init
 * again. If the server rejects, the client may try Init again. No
 * other operation may start while Init is in progress.
 * §3.2.1.1, §3.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitializeRequest ::= SEQUENCE {
 *     referenceId             ReferenceId OPTIONAL,
 *     protocolVersion         ProtocolVersion,
 *     options                 Options,
 *     preferredMessageSize    [5] IMPLICIT INTEGER,
 *     exceptionalRecordSize   [6] IMPLICIT INTEGER,
 *     idAuthentication        [7] ANY OPTIONAL,
 *     -- See comment 8
 *     implementationId        [110] IMPLICIT InternationalString OPTIONAL,
 *     implementationName      [111] IMPLICIT InternationalString OPTIONAL,
 *     implementationVersion   [112] IMPLICIT InternationalString OPTIONAL,
 *     userInformationField    [11] EXTERNAL OPTIONAL,
 *     otherInfo               OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class InitializeRequest {
    /**
     * @summary `referenceId`.
     * @description
     *
     * Client-assigned identifier of this Init operation. Optional on
     * Init: concurrent operations is not in effect until negotiation
     * finishes. If omitted under serial operations, the id is null and
     * the response omits it too. Opaque octets; no meaning beyond
     * identifying the operation. §3.2.1.1.9, §3.4, §3.5.
     *
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `protocolVersion`.
     * @description
     *
     * Every protocol version this client supports. The highest version
     * also set by the server is in force. Bits above version 3 are
     * ignored. Versions 1 and 2 are the same; a version-2 system
     * should also set version 1. If no version is shared, the server
     * should reject the association. §3.2.1.1.1, comment 9.
     *
     * @public
     * @readonly
     */
    readonly protocolVersion: ProtocolVersion;
    /**
     * @summary `options`.
     * @description
     *
     * Client proposal for each capability. The server response, not
     * this proposal, decides what is in effect. For a client-initiated
     * operation, if the client sets the bit off the server must set it
     * off too. §3.2.1.1.3.
     *
     * @public
     * @readonly
     */
    readonly options: Options;
    /**
     * @summary `preferredMessageSize`.
     * @description
     *
     * Proposed preferred message size, in bytes. The server response
     * value overrides the proposal. Must be less than or equal to
     * `exceptionalRecordSize`. Both sizes zero means no preference.
     * Message size is the sum of the response records, excluding
     * protocol control information, and need not be enforced exactly.
     * §3.2.1.1.4.
     *
     * @public
     * @readonly
     */
    readonly preferredMessageSize: INTEGER;
    /**
     * @summary `exceptionalRecordSize`.
     * @description
     *
     * Proposed maximum size, in bytes, of one record on Present when
     * a single record larger than the preferred message size is
     * requested. Must be greater than or equal to
     * `preferredMessageSize`. Equal values mean that special case
     * will not apply. The server response overrides the proposal.
     * §3.2.1.1.4.
     *
     * @public
     * @readonly
     */
    readonly exceptionalRecordSize: INTEGER;
    /**
     * @summary `idAuthentication`.
     * @description
     *
     * Optional credential the server uses to decide whether this
     * client may communicate with it. Whether it is supplied, and the
     * value, are agreed outside this standard. The ASN.1 keeps `ANY`
     * for older versions. Comment 8 recommends a choice of open
     * `VisibleString`, `idPass` (`groupId`, `userId`, `password`),
     * `anonymous`, or `other` as `EXTERNAL` (access-control formats
     * may be used). §3.2.1.1.2, comment 8.
     *
     * @public
     * @readonly
     */
    readonly idAuthentication: OPTIONAL<_Element>;
    /**
     * @summary `implementationId`.
     * @description
     *
     * Optional identifier of this client implementation, unique within
     * the client system. For implementers to tell implementations
     * apart. No effect on the protocol. §3.2.1.1.6.
     *
     * @public
     * @readonly
     */
    readonly implementationId: OPTIONAL<InternationalString>;
    /**
     * @summary `implementationName`.
     * @description
     *
     * Optional descriptive name of the client implementation. For
     * implementers. No effect on the protocol. §3.2.1.1.6.
     *
     * @public
     * @readonly
     */
    readonly implementationName: OPTIONAL<InternationalString>;
    /**
     * @summary `implementationVersion`.
     * @description
     *
     * Optional descriptive version of the client implementation. For
     * implementers. No effect on the protocol. §3.2.1.1.6.
     *
     * @public
     * @readonly
     */
    readonly implementationVersion: OPTIONAL<InternationalString>;
    /**
     * @summary `userInformationField`.
     * @description
     *
     * Additional information not specified by this standard. During
     * Init, externally defined information should be carried here,
     * with object identifier UserInfo-1
     * `{Z39-50-userInfoFormat 3}`, which has the same structure as
     * `OtherInformation`. Use this instead of `otherInfo` while the
     * version in force is still unknown. A diagnostic belongs in
     * `externallyDefinedInfo`. A negotiation record is
     * `externallyDefinedInfo` or `oid`, identified by its object
     * identifier. §3.2.1.1.7, USR.2, USR.3.
     *
     * @public
     * @readonly
     */
    readonly userInformationField: OPTIONAL<EXTERNAL>;
    /**
     * @summary `otherInfo`.
     * @description
     *
     * Additional information not specified by the standard. Valid only
     * when version 3 is in force. Use on Init, especially on the
     * request, is not recommended, because version 2 or 3 is not yet
     * known. The same information can be sent in
     * `userInformationField` as UserInfo-1. §3.2.1.1.8, USR.2.
     *
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        protocolVersion: ProtocolVersion,
        options: Options,
        preferredMessageSize: INTEGER,
        exceptionalRecordSize: INTEGER,
        idAuthentication: OPTIONAL<_Element>,
        implementationId: OPTIONAL<InternationalString>,
        implementationName: OPTIONAL<InternationalString>,
        implementationVersion: OPTIONAL<InternationalString>,
        userInformationField: OPTIONAL<EXTERNAL>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.protocolVersion = protocolVersion;
        this.options = options;
        this.preferredMessageSize = preferredMessageSize;
        this.exceptionalRecordSize = exceptionalRecordSize;
        this.idAuthentication = idAuthentication;
        this.implementationId = implementationId;
        this.implementationName = implementationName;
        this.implementationVersion = implementationVersion;
        this.userInformationField = userInformationField;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a InitializeRequest
     * @description
     * 
     * This takes an `object` and converts it to a `InitializeRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitializeRequest`.
     * @returns {InitializeRequest}
     */
    public static _from_object (_o: { [_K in keyof (InitializeRequest)]: (InitializeRequest)[_K] }): InitializeRequest {
        return new InitializeRequest(_o.referenceId, _o.protocolVersion, _o.options, _o.preferredMessageSize, _o.exceptionalRecordSize, _o.idAuthentication, _o.implementationId, _o.implementationName, _o.implementationVersion, _o.userInformationField, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of InitializeRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitializeRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("protocolVersion", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("options", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("preferredMessageSize", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("exceptionalRecordSize", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("idAuthentication", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("implementationId", true, $.hasTag(_TagClass.context, 110)),
    new $.ComponentSpec("implementationName", true, $.hasTag(_TagClass.context, 111)),
    new $.ComponentSpec("implementationVersion", true, $.hasTag(_TagClass.context, 112)),
    new $.ComponentSpec("userInformationField", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of InitializeRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitializeRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitializeRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitializeRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitializeRequest: $.ASN1Decoder<InitializeRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitializeRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitializeRequest (el: _Element): InitializeRequest {
    if (!_cached_decoder_for_InitializeRequest) { _cached_decoder_for_InitializeRequest = function (el: _Element): InitializeRequest {
    let referenceId: OPTIONAL<ReferenceId>;
    let protocolVersion!: ProtocolVersion;
    let options!: Options;
    let preferredMessageSize!: INTEGER;
    let exceptionalRecordSize!: INTEGER;
    let idAuthentication: OPTIONAL<_Element>;
    let implementationId: OPTIONAL<InternationalString>;
    let implementationName: OPTIONAL<InternationalString>;
    let implementationVersion: OPTIONAL<InternationalString>;
    let userInformationField: OPTIONAL<EXTERNAL>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "protocolVersion": (_el: _Element): void => { protocolVersion = _decode_ProtocolVersion(_el); },
        "options": (_el: _Element): void => { options = _decode_Options(_el); },
        "preferredMessageSize": (_el: _Element): void => { preferredMessageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "exceptionalRecordSize": (_el: _Element): void => { exceptionalRecordSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "idAuthentication": (_el: _Element): void => { idAuthentication = $._decode_explicit<_Element>(() => $._decodeAny)(_el); },
        "implementationId": (_el: _Element): void => { implementationId = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "implementationName": (_el: _Element): void => { implementationName = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "implementationVersion": (_el: _Element): void => { implementationVersion = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "userInformationField": (_el: _Element): void => { userInformationField = $._decode_explicit<EXTERNAL>(() => $._decodeExternal)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitializeRequest,
        _extension_additions_list_spec_for_InitializeRequest,
        _root_component_type_list_2_spec_for_InitializeRequest,
        undefined,
    );
    return new InitializeRequest(
        referenceId,
        protocolVersion,
        options,
        preferredMessageSize,
        exceptionalRecordSize,
        idAuthentication,
        implementationId,
        implementationName,
        implementationVersion,
        userInformationField,
        otherInfo
    );
}; }
    return _cached_decoder_for_InitializeRequest(el);
}

let _cached_encoder_for_InitializeRequest: $.ASN1Encoder<InitializeRequest> | null = null;

/**
 * @summary Encodes a(n) InitializeRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializeRequest, encoded as an ASN.1 Element.
 */
export
function _encode_InitializeRequest (value: InitializeRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitializeRequest) { _cached_encoder_for_InitializeRequest = function (value: InitializeRequest, elGetter: $.ASN1Encoder<InitializeRequest>): _Element {
    const _components: _Element[] = new Array(11);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ProtocolVersion, $.BER)(value.protocolVersion, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Options, $.BER)(value.options, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.preferredMessageSize, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.exceptionalRecordSize, $.BER);
    if (value.idAuthentication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => $._encodeAny, $.BER)(value.idAuthentication, $.BER);
    }
    if (value.implementationId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 110, () => _encode_InternationalString, $.BER)(value.implementationId, $.BER);
    }
    if (value.implementationName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 111, () => _encode_InternationalString, $.BER)(value.implementationName, $.BER);
    }
    if (value.implementationVersion !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 112, () => _encode_InternationalString, $.BER)(value.implementationVersion, $.BER);
    }
    if (value.userInformationField !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => $._encodeExternal, $.BER)(value.userInformationField, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_InitializeRequest(value, elGetter);
}


/* eslint-enable */
