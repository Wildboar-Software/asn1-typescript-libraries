/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceSupportOptions, _decode_ServiceSupportOptions, _encode_ServiceSupportOptions } from "../MMS-Object-Module-1/ServiceSupportOptions.ta.mjs";
import { ParameterSupportOptions, _decode_ParameterSupportOptions, _encode_ParameterSupportOptions } from "../MMS-Object-Module-1/ParameterSupportOptions.ta.mjs";
import { NullableAdditionalSupportOptions, _decode_NullableAdditionalSupportOptions, _encode_NullableAdditionalSupportOptions } from "../MMS-SCI-Module-1/NullableAdditionalSupportOptions.ta.mjs";
import { NullableAdditionalCBBOptions, _decode_NullableAdditionalCBBOptions, _encode_NullableAdditionalCBBOptions } from "../MMS-SCI-Module-1/NullableAdditionalCBBOptions.ta.mjs";
import { GeneralManagementParameters, _decode_GeneralManagementParameters, _encode_GeneralManagementParameters } from "../MMS-SCI-Module-1/GeneralManagementParameters.ta.mjs";
import { VMDSupportParameters, _decode_VMDSupportParameters, _encode_VMDSupportParameters } from "../MMS-SCI-Module-1/VMDSupportParameters.ta.mjs";
import { DomainManagementParameters, _decode_DomainManagementParameters, _encode_DomainManagementParameters } from "../MMS-SCI-Module-1/DomainManagementParameters.ta.mjs";
import { ProgramInvocationManagementParameters, _decode_ProgramInvocationManagementParameters, _encode_ProgramInvocationManagementParameters } from "../MMS-SCI-Module-1/ProgramInvocationManagementParameters.ta.mjs";
import { VariableAccessParameters, _decode_VariableAccessParameters, _encode_VariableAccessParameters } from "../MMS-SCI-Module-1/VariableAccessParameters.ta.mjs";
import { DataParameters, _decode_DataParameters, _encode_DataParameters } from "../MMS-SCI-Module-1/DataParameters.ta.mjs";
import { SemaphoreManagementParameters, _decode_SemaphoreManagementParameters, _encode_SemaphoreManagementParameters } from "../MMS-SCI-Module-1/SemaphoreManagementParameters.ta.mjs";
import { OperatorCommunicationParameters, _decode_OperatorCommunicationParameters, _encode_OperatorCommunicationParameters } from "../MMS-SCI-Module-1/OperatorCommunicationParameters.ta.mjs";
import { ErrorParameters, _decode_ErrorParameters, _encode_ErrorParameters } from "../MMS-SCI-Module-1/ErrorParameters.ta.mjs";
import { FileManagementParameters, _decode_FileManagementParameters, _encode_FileManagementParameters } from "../MMS-SCI-Module-1/FileManagementParameters.ta.mjs";


/**
 * @summary Service_and_Parameter_CBBs
 * @description
 * 
 * SCI Part Two (Tables 20–52):
 * client/server ServiceSupportOptions, ParameterSupportOptions, nest,
 * optional extended services/CBBs, plus CIS parameter groups. SCI
 * configuration/initialization encoding (ISO 9506-2:2003 Annex B), not a
 * runtime MMS PDU.
 * ISO 9506-2:2003 Annex B.2; CBB bits ISO 9506-1:2003 §8.1.3.14–§8.1.3.19,
 * §8.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service-and-Parameter-CBBs ::= SEQUENCE {
 *     services-Client            [0] IMPLICIT ServiceSupportOptions,
 *     services-Server            [1] IMPLICIT ServiceSupportOptions,
 *     parameters                 [2] IMPLICIT ParameterSupportOptions,
 *     nest                       [3] IMPLICIT INTEGER,
 *     extendedServices-Client    [4] IMPLICIT NullableAdditionalSupportOptions,
 *     extendedServices-Server    [5] IMPLICIT NullableAdditionalSupportOptions,
 *     extendedParameters         [6] IMPLICIT NullableAdditionalCBBOptions,
 *     generalManagement          [7] IMPLICIT GeneralManagementParameters,
 *     vMDSupport                 [8] IMPLICIT VMDSupportParameters,
 *     domainManagement           [9] IMPLICIT DomainManagementParameters,
 *     programInvocation          [10] IMPLICIT ProgramInvocationManagementParameters,
 *     variableAccess             [11] IMPLICIT VariableAccessParameters,
 *     dataParameters             [12] IMPLICIT DataParameters,
 *     semaphoreManagement        [13] IMPLICIT SemaphoreManagementParameters,
 *     operatorCommunication      [14] IMPLICIT OperatorCommunicationParameters,
 *     errors                     [15] IMPLICIT ErrorParameters,
 *     fileManagement             [16] IMPLICIT FileManagementParameters
 * }
 * ```
 * 
 * @class
 */
export
class Service_and_Parameter_CBBs {
    constructor (
        /**
         * @summary `services_Client`.
         * @public
         * @readonly
         */
        readonly services_Client: ServiceSupportOptions,
        /**
         * @summary `services_Server`.
         * @public
         * @readonly
         */
        readonly services_Server: ServiceSupportOptions,
        /**
         * @summary `parameters`.
         * @description
         *
         * Parameter CBB bits. ISO 9506-1:2003 §8.1.3.15; ISO 9506-2:2003 Annex
         * B.2.
         *
         * @public
         * @readonly
         */
        readonly parameters: ParameterSupportOptions,
        /**
         * @summary `nest`.
         * @description
         *
         * Max type-tree nest depth. ISO 9506-1:2003 §8.1.3.16; ISO 9506-2:2003
         * Annex B.2.
         *
         * @public
         * @readonly
         */
        readonly nest: INTEGER,
        /**
         * @summary `extendedServices_Client`.
         * @public
         * @readonly
         */
        readonly extendedServices_Client: NullableAdditionalSupportOptions,
        /**
         * @summary `extendedServices_Server`.
         * @public
         * @readonly
         */
        readonly extendedServices_Server: NullableAdditionalSupportOptions,
        /**
         * @summary `extendedParameters`.
         * @description
         *
         * AdditionalCBBOptions, or NULL if not cspi. ISO 9506-1:2003 §8.1.3.19;
         * ISO 9506-2:2003 Annex B.2.
         *
         * @public
         * @readonly
         */
        readonly extendedParameters: NullableAdditionalCBBOptions,
        /**
         * @summary `generalManagement`.
         * @description
         *
         * Table 21 CIS parameters. ISO 9506-2:2003 Annex B.2.1.
         *
         * @public
         * @readonly
         */
        readonly generalManagement: GeneralManagementParameters,
        /**
         * @summary `vMDSupport`.
         * @description
         *
         * Table 25 CIS parameters. ISO 9506-2:2003 Annex B.2.2.
         *
         * @public
         * @readonly
         */
        readonly vMDSupport: VMDSupportParameters,
        /**
         * @summary `domainManagement`.
         * @description
         *
         * Table 27 CIS parameters. ISO 9506-2:2003 Annex B.2.3.
         *
         * @public
         * @readonly
         */
        readonly domainManagement: DomainManagementParameters,
        /**
         * @summary `programInvocation`.
         * @description
         *
         * Table 28 CIS parameters, or a linked PI instance in object records.
         * ISO 9506-2:2003 Annex B.
         *
         * @public
         * @readonly
         */
        readonly programInvocation: ProgramInvocationManagementParameters,
        /**
         * @summary `variableAccess`.
         * @description
         *
         * Table 32 CIS parameters. ISO 9506-2:2003 Annex B.2.5.
         *
         * @public
         * @readonly
         */
        readonly variableAccess: VariableAccessParameters,
        /**
         * @summary `dataParameters`.
         * @description
         *
         * Table 33 CIS parameters. ISO 9506-2:2003 Annex B.2.6.
         *
         * @public
         * @readonly
         */
        readonly dataParameters: DataParameters,
        /**
         * @summary `semaphoreManagement`.
         * @description
         *
         * Table 36 CIS parameters. ISO 9506-2:2003 Annex B.2.7.
         *
         * @public
         * @readonly
         */
        readonly semaphoreManagement: SemaphoreManagementParameters,
        /**
         * @summary `operatorCommunication`.
         * @description
         *
         * Table 37 CIS parameters. ISO 9506-2:2003 Annex B.2.8.
         *
         * @public
         * @readonly
         */
        readonly operatorCommunication: OperatorCommunicationParameters,
        /**
         * @summary `errors`.
         * @description
         *
         * Table 47 CIS parameters. ISO 9506-2:2003 Annex B.2.9.
         *
         * @public
         * @readonly
         */
        readonly errors: ErrorParameters,
        /**
         * @summary `fileManagement`.
         * @description
         *
         * Table 50 CIS parameters. ISO 9506-2:2003 Annex B.2.10.
         *
         * @public
         * @readonly
         */
        readonly fileManagement: FileManagementParameters
    ) {}

    /**
     * @summary Restructures an object into a Service_and_Parameter_CBBs
     * @description
     * 
     * This takes an `object` and converts it to a `Service_and_Parameter_CBBs`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Service_and_Parameter_CBBs`.
     * @returns {Service_and_Parameter_CBBs}
     */
    public static _from_object (_o: { [_K in keyof (Service_and_Parameter_CBBs)]: (Service_and_Parameter_CBBs)[_K] }): Service_and_Parameter_CBBs {
        return new Service_and_Parameter_CBBs(_o.services_Client, _o.services_Server, _o.parameters, _o.nest, _o.extendedServices_Client, _o.extendedServices_Server, _o.extendedParameters, _o.generalManagement, _o.vMDSupport, _o.domainManagement, _o.programInvocation, _o.variableAccess, _o.dataParameters, _o.semaphoreManagement, _o.operatorCommunication, _o.errors, _o.fileManagement);
    }


}

/**
 * @summary The Leading Root Component Types of Service_and_Parameter_CBBs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Service_and_Parameter_CBBs: $.ComponentSpec[] = [
    new $.ComponentSpec("services-Client", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("services-Server", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("parameters", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nest", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extendedServices-Client", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extendedServices-Server", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("extendedParameters", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("generalManagement", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("vMDSupport", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("domainManagement", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("programInvocation", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("variableAccess", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("dataParameters", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("semaphoreManagement", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("operatorCommunication", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("errors", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("fileManagement", false, $.hasTag(_TagClass.context, 16))
];

/**
 * @summary The Trailing Root Component Types of Service_and_Parameter_CBBs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Service_and_Parameter_CBBs: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Service_and_Parameter_CBBs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Service_and_Parameter_CBBs: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Service_and_Parameter_CBBs: $.ASN1Decoder<Service_and_Parameter_CBBs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Service_and_Parameter_CBBs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Service_and_Parameter_CBBs (el: _Element): Service_and_Parameter_CBBs {
    if (!_cached_decoder_for_Service_and_Parameter_CBBs) { _cached_decoder_for_Service_and_Parameter_CBBs = function (el: _Element): Service_and_Parameter_CBBs {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 17) {
        throw new _ConstructionError("Service-and-Parameter-CBBs contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "services-Client";
    sequence[1].name = "services-Server";
    sequence[2].name = "parameters";
    sequence[3].name = "nest";
    sequence[4].name = "extendedServices-Client";
    sequence[5].name = "extendedServices-Server";
    sequence[6].name = "extendedParameters";
    sequence[7].name = "generalManagement";
    sequence[8].name = "vMDSupport";
    sequence[9].name = "domainManagement";
    sequence[10].name = "programInvocation";
    sequence[11].name = "variableAccess";
    sequence[12].name = "dataParameters";
    sequence[13].name = "semaphoreManagement";
    sequence[14].name = "operatorCommunication";
    sequence[15].name = "errors";
    sequence[16].name = "fileManagement";
    let services_Client!: ServiceSupportOptions;
    let services_Server!: ServiceSupportOptions;
    let parameters!: ParameterSupportOptions;
    let nest!: INTEGER;
    let extendedServices_Client!: NullableAdditionalSupportOptions;
    let extendedServices_Server!: NullableAdditionalSupportOptions;
    let extendedParameters!: NullableAdditionalCBBOptions;
    let generalManagement!: GeneralManagementParameters;
    let vMDSupport!: VMDSupportParameters;
    let domainManagement!: DomainManagementParameters;
    let programInvocation!: ProgramInvocationManagementParameters;
    let variableAccess!: VariableAccessParameters;
    let dataParameters!: DataParameters;
    let semaphoreManagement!: SemaphoreManagementParameters;
    let operatorCommunication!: OperatorCommunicationParameters;
    let errors!: ErrorParameters;
    let fileManagement!: FileManagementParameters;
    services_Client = $._decode_implicit<ServiceSupportOptions>(() => _decode_ServiceSupportOptions)(sequence[0]);
    services_Server = $._decode_implicit<ServiceSupportOptions>(() => _decode_ServiceSupportOptions)(sequence[1]);
    parameters = $._decode_implicit<ParameterSupportOptions>(() => _decode_ParameterSupportOptions)(sequence[2]);
    nest = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[3]);
    extendedServices_Client = $._decode_implicit<NullableAdditionalSupportOptions>(() => _decode_NullableAdditionalSupportOptions)(sequence[4]);
    extendedServices_Server = $._decode_implicit<NullableAdditionalSupportOptions>(() => _decode_NullableAdditionalSupportOptions)(sequence[5]);
    extendedParameters = $._decode_implicit<NullableAdditionalCBBOptions>(() => _decode_NullableAdditionalCBBOptions)(sequence[6]);
    generalManagement = $._decode_implicit<GeneralManagementParameters>(() => _decode_GeneralManagementParameters)(sequence[7]);
    vMDSupport = $._decode_implicit<VMDSupportParameters>(() => _decode_VMDSupportParameters)(sequence[8]);
    domainManagement = $._decode_implicit<DomainManagementParameters>(() => _decode_DomainManagementParameters)(sequence[9]);
    programInvocation = $._decode_implicit<ProgramInvocationManagementParameters>(() => _decode_ProgramInvocationManagementParameters)(sequence[10]);
    variableAccess = $._decode_implicit<VariableAccessParameters>(() => _decode_VariableAccessParameters)(sequence[11]);
    dataParameters = $._decode_implicit<DataParameters>(() => _decode_DataParameters)(sequence[12]);
    semaphoreManagement = $._decode_implicit<SemaphoreManagementParameters>(() => _decode_SemaphoreManagementParameters)(sequence[13]);
    operatorCommunication = $._decode_implicit<OperatorCommunicationParameters>(() => _decode_OperatorCommunicationParameters)(sequence[14]);
    errors = $._decode_implicit<ErrorParameters>(() => _decode_ErrorParameters)(sequence[15]);
    fileManagement = $._decode_implicit<FileManagementParameters>(() => _decode_FileManagementParameters)(sequence[16]);
    return new Service_and_Parameter_CBBs(
        services_Client,
        services_Server,
        parameters,
        nest,
        extendedServices_Client,
        extendedServices_Server,
        extendedParameters,
        generalManagement,
        vMDSupport,
        domainManagement,
        programInvocation,
        variableAccess,
        dataParameters,
        semaphoreManagement,
        operatorCommunication,
        errors,
        fileManagement,

    );
}; }
    return _cached_decoder_for_Service_and_Parameter_CBBs(el);
}

let _cached_encoder_for_Service_and_Parameter_CBBs: $.ASN1Encoder<Service_and_Parameter_CBBs> | null = null;

/**
 * @summary Encodes a(n) Service_and_Parameter_CBBs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Service_and_Parameter_CBBs, encoded as an ASN.1 Element.
 */
export
function _encode_Service_and_Parameter_CBBs (value: Service_and_Parameter_CBBs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Service_and_Parameter_CBBs) { _cached_encoder_for_Service_and_Parameter_CBBs = function (value: Service_and_Parameter_CBBs): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceSupportOptions, $.BER)(value.services_Client, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceSupportOptions, $.BER)(value.services_Server, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ParameterSupportOptions, $.BER)(value.parameters, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.nest, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_NullableAdditionalSupportOptions, $.BER)(value.extendedServices_Client, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_NullableAdditionalSupportOptions, $.BER)(value.extendedServices_Server, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_NullableAdditionalCBBOptions, $.BER)(value.extendedParameters, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_GeneralManagementParameters, $.BER)(value.generalManagement, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_VMDSupportParameters, $.BER)(value.vMDSupport, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_DomainManagementParameters, $.BER)(value.domainManagement, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => _encode_ProgramInvocationManagementParameters, $.BER)(value.programInvocation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_VariableAccessParameters, $.BER)(value.variableAccess, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => _encode_DataParameters, $.BER)(value.dataParameters, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => _encode_SemaphoreManagementParameters, $.BER)(value.semaphoreManagement, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => _encode_OperatorCommunicationParameters, $.BER)(value.operatorCommunication, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => _encode_ErrorParameters, $.BER)(value.errors, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => _encode_FileManagementParameters, $.BER)(value.fileManagement, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Service_and_Parameter_CBBs(value, elGetter);
}


/* eslint-enable */
