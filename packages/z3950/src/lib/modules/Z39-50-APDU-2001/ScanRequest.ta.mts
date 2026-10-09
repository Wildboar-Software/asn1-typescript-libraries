/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { DatabaseName, _decode_DatabaseName, _encode_DatabaseName } from "../Z39-50-APDU-2001/DatabaseName.ta.mjs";
import { AttributeSetId, _decode_AttributeSetId, _encode_AttributeSetId } from "../Z39-50-APDU-2001/AttributeSetId.ta.mjs";
import { AttributesPlusTerm, _decode_AttributesPlusTerm, _encode_AttributesPlusTerm } from "../Z39-50-APDU-2001/AttributesPlusTerm.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary ScanRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScanRequest ::= SEQUENCE {
 *     referenceId                 ReferenceId OPTIONAL,
 *     databaseNames               [3] IMPLICIT SEQUENCE OF DatabaseName,
 *     attributeSet                AttributeSetId OPTIONAL,
 *     -- SEE COMMENT 2
 *     termListAndStartPoint       AttributesPlusTerm,
 *     stepSize                    [5] IMPLICIT INTEGER OPTIONAL,
 *     numberOfTermsRequested      [6] IMPLICIT INTEGER,
 *     preferredPositionInResponse [7] IMPLICIT INTEGER OPTIONAL,
 *     otherInfo                   OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ScanRequest {
    /**
     * @summary `referenceId`.
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `databaseNames`.
     * @public
     * @readonly
     */
    readonly databaseNames: DatabaseName[];
    /**
     * @summary `attributeSet`.
     * @public
     * @readonly
     */
    readonly attributeSet: OPTIONAL<AttributeSetId>;
    /**
     * @summary `termListAndStartPoint`.
     * @public
     * @readonly
     */
    readonly termListAndStartPoint: AttributesPlusTerm;
    /**
     * @summary `stepSize`.
     * @public
     * @readonly
     */
    readonly stepSize: OPTIONAL<INTEGER>;
    /**
     * @summary `numberOfTermsRequested`.
     * @public
     * @readonly
     */
    readonly numberOfTermsRequested: INTEGER;
    /**
     * @summary `preferredPositionInResponse`.
     * @public
     * @readonly
     */
    readonly preferredPositionInResponse: OPTIONAL<INTEGER>;
    /**
     * @summary `otherInfo`.
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        databaseNames: DatabaseName[],
        attributeSet: OPTIONAL<AttributeSetId>,
        termListAndStartPoint: AttributesPlusTerm,
        stepSize: OPTIONAL<INTEGER>,
        numberOfTermsRequested: INTEGER,
        preferredPositionInResponse: OPTIONAL<INTEGER>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.databaseNames = databaseNames;
        this.attributeSet = attributeSet;
        this.termListAndStartPoint = termListAndStartPoint;
        this.stepSize = stepSize;
        this.numberOfTermsRequested = numberOfTermsRequested;
        this.preferredPositionInResponse = preferredPositionInResponse;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a ScanRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ScanRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScanRequest`.
     * @returns {ScanRequest}
     */
    public static _from_object (_o: { [_K in keyof (ScanRequest)]: (ScanRequest)[_K] }): ScanRequest {
        return new ScanRequest(_o.referenceId, _o.databaseNames, _o.attributeSet, _o.termListAndStartPoint, _o.stepSize, _o.numberOfTermsRequested, _o.preferredPositionInResponse, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of ScanRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ScanRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("databaseNames", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("attributeSet", true, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("termListAndStartPoint", false, $.hasTag(_TagClass.context, 102)),
    new $.ComponentSpec("stepSize", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("numberOfTermsRequested", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("preferredPositionInResponse", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of ScanRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ScanRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ScanRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ScanRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ScanRequest: $.ASN1Decoder<ScanRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScanRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScanRequest (el: _Element): ScanRequest {
    if (!_cached_decoder_for_ScanRequest) { _cached_decoder_for_ScanRequest = function (el: _Element): ScanRequest {
    let referenceId: OPTIONAL<ReferenceId>;
    let databaseNames!: DatabaseName[];
    let attributeSet: OPTIONAL<AttributeSetId>;
    let termListAndStartPoint!: AttributesPlusTerm;
    let stepSize: OPTIONAL<INTEGER>;
    let numberOfTermsRequested!: INTEGER;
    let preferredPositionInResponse: OPTIONAL<INTEGER>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "databaseNames": (_el: _Element): void => { databaseNames = $._decode_implicit<DatabaseName[]>(() => $._decodeSequenceOf<DatabaseName>(() => _decode_DatabaseName))(_el); },
        "attributeSet": (_el: _Element): void => { attributeSet = _decode_AttributeSetId(_el); },
        "termListAndStartPoint": (_el: _Element): void => { termListAndStartPoint = _decode_AttributesPlusTerm(_el); },
        "stepSize": (_el: _Element): void => { stepSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "numberOfTermsRequested": (_el: _Element): void => { numberOfTermsRequested = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "preferredPositionInResponse": (_el: _Element): void => { preferredPositionInResponse = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ScanRequest,
        _extension_additions_list_spec_for_ScanRequest,
        _root_component_type_list_2_spec_for_ScanRequest,
        undefined,
    );
    return new ScanRequest(
        referenceId,
        databaseNames,
        attributeSet,
        termListAndStartPoint,
        stepSize,
        numberOfTermsRequested,
        preferredPositionInResponse,
        otherInfo
    );
}; }
    return _cached_decoder_for_ScanRequest(el);
}

let _cached_encoder_for_ScanRequest: $.ASN1Encoder<ScanRequest> | null = null;

/**
 * @summary Encodes a(n) ScanRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScanRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ScanRequest (value: ScanRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScanRequest) { _cached_encoder_for_ScanRequest = function (value: ScanRequest, elGetter: $.ASN1Encoder<ScanRequest>): _Element {
    const _components: _Element[] = new Array(8);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<DatabaseName>(() => _encode_DatabaseName, $.BER), $.BER)(value.databaseNames, $.BER);
    if (value.attributeSet !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_AttributeSetId(value.attributeSet, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 102, () => _encode_AttributesPlusTerm, $.BER)(value.termListAndStartPoint, $.BER);
    if (value.stepSize !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.stepSize, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.numberOfTermsRequested, $.BER);
    if (value.preferredPositionInResponse !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.preferredPositionInResponse, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ScanRequest(value, elGetter);
}


/* eslint-enable */
